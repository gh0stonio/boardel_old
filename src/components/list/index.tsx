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
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    setLoading(true)

    db.collection('users')
      .doc(user.uid)
      .collection('tasks')
      .where('date', '>=', selectedDate.startOf('day').toDate())
      .where('date', '<=', selectedDate.endOf('day').toDate())
      .onSnapshot(querySnapshot => {
        const tasksDocs = []
        querySnapshot.forEach(doc => {
          const data = doc.data()

          tasksDocs.push({
            ...data,
            id: doc.id,
            date: moment(data.date),
          })
        })

        setTasks(tasksDocs)
        setLoading(false)
      })
  }, [selectedDate, user.uid])

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
