import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Empty from '#components/empty'
import Task from '#components/task'
import useAuth from '#hooks/useAuth'
import { setTasks, updateComments } from '#store/reducers/tasks'
import { getAllTasks, getSelectedDate } from '#store/selectors'
import { db } from '#utils/firebase'

import { LoaderWrapper, StyledLoader, Wrapper } from './styles'

const List: React.FC = () => {
  const user = useAuth()
  const dispatch = useDispatch()
  const selectedDate = useSelector(getSelectedDate)
  const tasks = useSelector(getAllTasks)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const userTasksRef = db
      .collection('users')
      .doc(user.uid)
      .collection('tasks')

    userTasksRef
      .where('date', '>=', selectedDate.startOf('day').toDate())
      .where('date', '<=', selectedDate.endOf('day').toDate())
      .onSnapshot(taskQuerySnapshot => {
        const getTasksPromises = []

        taskQuerySnapshot.forEach(taskDoc => {
          const taskData = taskDoc.data()

          // get all tasks content
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

          // listen for comments update
          userTasksRef
            .doc(taskDoc.id)
            .collection('comments')
            .orderBy('date', 'desc')
            .onSnapshot(commentQuerySnapshot => {
              const _comments: TaskComment[] = []

              commentQuerySnapshot.forEach(commentDoc => {
                const commentData = commentDoc.data()
                _comments.push({
                  id: commentDoc.id,
                  content: commentData.content,
                  date: moment(commentData.date.toDate()),
                })
              })

              dispatch(updateComments(taskDoc.id, _comments))
            })
        })

        Promise.all(getTasksPromises).then(tasks => {
          dispatch(setTasks(tasks))
          setLoading(false)
        })
      })
  }, [dispatch, selectedDate, user.uid])

  return (
    <Wrapper>
      {loading ? (
        <LoaderWrapper>
          <StyledLoader width="6rem" height="6rem" />
        </LoaderWrapper>
      ) : tasks.length > 0 ? (
        tasks.map(task => <Task key={task.id} task={task} />)
      ) : (
        <Empty />
      )}
    </Wrapper>
  )
}

export default List
