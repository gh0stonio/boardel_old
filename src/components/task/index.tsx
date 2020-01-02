import React from 'react'

import { TaskContainer, TaskCategory, TaskLabel, TaskDescription, TaskFooter } from './styles'

const Task: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <TaskContainer>
      <TaskCategory category={task.category} />
      <TaskLabel>{task.label}</TaskLabel>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskFooter />
    </TaskContainer>
  )
}

export default Task
