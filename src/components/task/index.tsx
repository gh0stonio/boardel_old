import React, { useMemo } from 'react'
import Swippy from 'swippy'

import {
  DoneContent,
  PostponeContent,
  SideElementWrapper,
  StyledDoneIcon,
  StyledPostponeIcon,
  TaskCategory,
  TaskContainer,
  TaskDescription,
  TaskFooter,
  TaskLabel,
} from './styles'

const Task: React.FC<{ task: Task }> = ({ task }) => {
  const MainElement = useMemo(
    () => (
      <TaskContainer>
        <TaskCategory category={task.category} />
        <TaskLabel>{task.label}</TaskLabel>
        <TaskDescription>{task.description}</TaskDescription>
        <TaskFooter />
      </TaskContainer>
    ),
    [task.category, task.description, task.label],
  )
  const Postpone = ({ opacity }: { isActive: boolean; opacity: number }) => (
    <SideElementWrapper>
      <PostponeContent opacity={opacity}>
        <StyledPostponeIcon />
        Postpone
      </PostponeContent>
    </SideElementWrapper>
  )
  const Done = ({ opacity }: { isActive: boolean; opacity: number }) => (
    <SideElementWrapper>
      <DoneContent opacity={opacity}>
        <StyledDoneIcon />
        Done
      </DoneContent>
    </SideElementWrapper>
  )

  return (
    <Swippy
      mainElement={MainElement}
      renderLeftElement={(isActive, opacity) => <Postpone isActive={isActive} opacity={opacity} />}
      renderRightElement={(isActive, opacity) => <Done isActive={isActive} opacity={opacity} />}
    />
  )
}

export default Task
