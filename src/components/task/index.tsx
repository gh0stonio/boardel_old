import React from 'react'
import moment from 'moment'

import { TaskContainer, TaskCategory, TaskLabel, TaskDescription, TaskFooter } from './styles'

export type TaskType = {
  id: string
  label: string
  description: string
  isPostpone: boolean
  date: moment.Moment
}
export type Category = 'personal' | 'professional'

const Task: React.FC<{ task: TaskType }> = ({ task }) => {
  const category: Category = 'personal'
  console.log('task', task)
  return (
    <TaskContainer>
      <TaskCategory category={category} />
      <TaskLabel>{task.label}</TaskLabel>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskFooter />
    </TaskContainer>
  )
}

export default Task
