import moment from 'moment'
import { NextPage } from 'next'
import Router from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '#components/header'
import List from '#components/list'
import useAuth from '#hooks/useAuth'
import { setIsLoading, setTasks } from '#store/reducers/tasks'
import { db } from '#utils/firebase'
import styled from '#utils/styled'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100vh;
`

const TasksContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10.6rem;
`

const Home: NextPage = () => {
  const user = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    const userTasksRef = db
      .collection('users')
      .doc(user.uid)
      .collection('tasks')

    const tasksUnsubscribe = userTasksRef.onSnapshot(taskQuerySnapshot => {
      const getTasksPromises = []

      taskQuerySnapshot.forEach(taskDoc => {
        const taskData = taskDoc.data()

        getTasksPromises.push(
          userTasksRef
            .doc(taskDoc.id)
            .collection('comments')
            .orderBy('date', 'desc')
            .get()
            .then(commentQuerySnapshot => {
              const _comments: TaskComment[] = []

              commentQuerySnapshot.forEach(commentDoc => {
                const commentData = commentDoc.data()
                _comments.push({
                  id: commentDoc.id,
                  content: commentData.content,
                  date: moment(commentData.date.toDate()),
                })
              })

              return {
                id: taskDoc.id,
                label: taskData.label,
                description: taskData.description,
                isPostpone: taskData.isPostpone,
                isDone: taskData.isDone,
                category: taskData.category,
                isImportant: taskData.isImportant,
                date: moment(taskData.date.toDate()),
                comments: _comments,
              }
            }),
        )
      })

      Promise.all(getTasksPromises).then(tasks => {
        dispatch(setTasks(tasks))
        dispatch(setIsLoading(false))
      })
    })

    return () => {
      tasksUnsubscribe()
    }
  }, [dispatch, user])

  if (!user) {
    if (process.browser) Router.push('/auth')
    return null
  }

  return (
    <Wrapper>
      <Header />
      <TasksContainer>
        <List />
      </TasksContainer>
    </Wrapper>
  )
}

export default Home
