import moment from 'moment'
import React, { useEffect, useState } from 'react'

import Empty from '#components/empty'
import Task from '#components/task'
import useAuth from '#hooks/useAuth'
import { useStore } from '#hooks/useStore'
import { db } from '#utils/firebase'

import { LoaderWrapper, StyledLoader, Wrapper } from './styles'

const List: React.FC = () => {
  const user = useAuth()
  const {
    state: { selectedDate },
  } = useStore()
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks] = useState<{ [key: string]: Task }>(null)

  useEffect(() => {
    setLoading(true)

    db.collection('users')
      .doc(user.uid)
      .collection('tasks')
      .where('date', '>=', selectedDate.startOf('day').toDate())
      .where('date', '<=', selectedDate.endOf('day').toDate())
      .onSnapshot(taskQuerySnapshot => {
        taskQuerySnapshot.forEach(taskDoc => {
          db.collection('users')
            .doc(user.uid)
            .collection('tasks')
            .doc(taskDoc.id)
            .collection('comments')
            .orderBy('date', 'desc')
            .onSnapshot(commentQuerySnapshot => {
              const taskData = taskDoc.data()
              const task: Task = {
                id: taskDoc.id,
                label: taskData.label,
                description: taskData.description,
                isPostpone: taskData.isPostpone,
                isDone: taskData.isDone,
                category: taskData.category,
                isImportant: taskData.isImportant,
                date: moment(taskData.date.toDate()),
                comments: {},
              }

              commentQuerySnapshot.forEach(commentDoc => {
                const commentData = commentDoc.data()
                task.comments[commentDoc.id] = {
                  id: commentDoc.id,
                  content: commentData.content,
                  date: moment(commentData.date.toDate()),
                }
              })

              setTasks(tasks => ({ ...tasks, [task.id]: task }))
              setLoading(false)
            })
        })
      })
  }, [selectedDate, user.uid])

  return (
    <Wrapper>
      {loading ? (
        <LoaderWrapper>
          <StyledLoader width="6rem" height="6rem" />
        </LoaderWrapper>
      ) : tasks ? (
        Object.values(tasks).map(task => <Task key={task.id} task={task} />)
      ) : (
        <Empty />
      )}
    </Wrapper>
  )
}

export default List
