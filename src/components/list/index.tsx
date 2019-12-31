import moment from 'moment'
import React, { useState, useEffect } from 'react'

import { db } from '../../utils/firebase'
import useAuth from '../../hooks/useAuth'
import { useStore } from '../../hooks/useStore'
import { Loader } from '../shared'
import Empty from '../empty'
import Task, { TaskType } from '../task'
import { LoaderWrapper, Wrapper } from './styles'

const List: React.FC = () => {
  const user = useAuth()
  const {
    state: { selectedDate },
  } = useStore()
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks] = useState<TaskType[]>([])

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
            id: doc.id,
            description: data.description,
            label: data.label,
            isPostpone: data.isPostpone,
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
          <Loader width="6rem" height="6rem" />
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
