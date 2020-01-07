import React, { useMemo } from 'react'
import Swippy from 'swippy'

import {
  CommentNumber,
  CommentSummary,
  DoneContent,
  PersonalCategoryIcon,
  PostponeContent,
  SideElementWrapper,
  StyledDoneIcon,
  StyledPostponeIcon,
  TaskCategory,
  TaskContainer,
  TaskContent,
  TaskFooter,
  TaskLabel,
  TaskPriority,
  WorkCategoryIcon,
} from './styles'
import { BurgerMenuIcon } from '../icons'
import { theme } from '../../utils/styled'
import { Category } from '../../constants'

const Task: React.FC<{ task: Task }> = ({ task }) => {
  const MainElement = useMemo(
    () => (
      <TaskContainer>
        {task.isImportant && <TaskPriority />}
        <TaskCategory category={task.category}>
          {task.category === Category.professional ? <WorkCategoryIcon /> : <PersonalCategoryIcon />}
        </TaskCategory>
        <TaskContent>
          <TaskLabel>
            <p>{task.label}</p>
          </TaskLabel>
          <TaskFooter>
            <CommentSummary>
              <BurgerMenuIcon width="1.5rem" height="1.5rem" fill={theme.colors.darkestGrey} />
              <CommentNumber>0</CommentNumber>
            </CommentSummary>
          </TaskFooter>
        </TaskContent>
      </TaskContainer>
    ),
    [task.category, task.isImportant, task.label],
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
