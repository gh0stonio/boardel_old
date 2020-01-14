import React, { useCallback, useMemo, useState } from 'react'
import Swippy from 'swippy'

import { BurgerMenuIcon } from '#components/icons'
import { Category } from '#constants'
import useAuth from '#hooks/useAuth'
import { db } from '#utils/firebase'
import { theme } from '#utils/styled'

import {
  CommentNumber,
  CommentSummary,
  Container,
  DoneContent,
  Modal,
  PersonalCategoryIcon,
  PostponeContent,
  RecapCommentContent,
  RecapCommentTop,
  RecapCommentWrapper,
  RecapDescriptionContent,
  RecapLabel,
  RecapSectionContent,
  RecapSectionTitle,
  SideElementWrapper,
  StyledDoneIcon,
  StyledPostponeIcon,
  TaskCategory,
  TaskContainer,
  TaskContent,
  TaskFooter,
  TaskLabel,
  TaskPriority,
  TaskWrapper,
  WorkCategoryIcon,
} from './styles'

const Task: React.FC<{ task: Task }> = ({ task }) => {
  const user = useAuth()
  const [showRecap, setShowRecap] = useState(false)

  const postpone = useCallback(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('tasks')
      .doc(task.id)
      .update({ date: task.date.add(1, 'd').toDate(), isPostpone: true })
  }, [task.date, task.id, user.uid])

  const Recap: React.FC = () => {
    return (
      <Modal onClick={() => setShowRecap(false)}>
        <Container>
          <TaskWrapper>
            <TaskCategory category={task.category} height="3.5rem" width="3.5rem">
              {task.category === Category.professional ? (
                <WorkCategoryIcon height="1.8rem" width="1.8rem" />
              ) : (
                <PersonalCategoryIcon height="1.8rem" width="1.8rem" />
              )}
            </TaskCategory>
          </TaskWrapper>
          <RecapLabel>{task.label}</RecapLabel>
          <RecapSectionTitle>Description</RecapSectionTitle>
          <RecapDescriptionContent>{task.description}</RecapDescriptionContent>
          <RecapSectionTitle>Comments</RecapSectionTitle>
          <RecapSectionContent>
            {task.comments.map(comment => (
              <RecapCommentWrapper key={comment.id}>
                <RecapCommentTop>
                  <BurgerMenuIcon width="1.5rem" height="1.5rem" fill={theme.colors.darkestGrey} />
                  <p>{comment.date.fromNow()}</p>
                </RecapCommentTop>
                <RecapCommentContent>{comment.content}</RecapCommentContent>
              </RecapCommentWrapper>
            ))}
          </RecapSectionContent>
        </Container>
      </Modal>
    )
  }

  const MainElement = useMemo(
    () => (
      <TaskContainer onClick={() => setShowRecap(true)}>
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
              <CommentNumber>{task.comments.length}</CommentNumber>
            </CommentSummary>
          </TaskFooter>
        </TaskContent>
      </TaskContainer>
    ),
    [task.category, task.comments, task.isImportant, task.label],
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
    <>
      {showRecap && <Recap />}
      <Swippy
        leftAction={postpone}
        mainElement={MainElement}
        renderLeftElement={(isActive, opacity) => <Postpone isActive={isActive} opacity={opacity} />}
        renderRightElement={(isActive, opacity) => <Done isActive={isActive} opacity={opacity} />}
      />
    </>
  )
}

export default Task
