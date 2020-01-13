import { DoneIcon, PersonalIcon, PostponeIcon, WorkIcon } from '#components/icons'
import { Category } from '#constants'
import styled from '#utils/styled'

export const TaskContainer = styled.div`
  display: flex;
  height: 5.5rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0.7rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.darkGrey};
`
export const TaskPriority = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  position: absolute;
  left: 0;
  top: 0;
  width: 0.3rem;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TaskCategory = styled.div<{ category: Category; height?: string; width?: string }>`
  position: relative;
  background-color: ${({ theme, category }) => theme.colors.categories[category]};
  flex-basis: ${({ height }) => height || '2.5rem'};
  min-width: ${({ width }) => width || '2.5rem'};
  max-width: ${({ width }) => width || '2.5rem'};
  height: ${({ height }) => height || '2.5rem'};
  border-radius: 50%;
  margin: auto 1.3rem;
`
export const WorkCategoryIcon = styled(WorkIcon)`
  position: absolute;
  left: 25%;
  top: 23%;
  fill: ${({ theme }) => theme.colors.white};
`
export const PersonalCategoryIcon = styled(PersonalIcon)`
  position: absolute;
  left: 25%;
  top: 23%;
  fill: ${({ theme }) => theme.colors.white};
`
export const TaskLabel = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${({ theme }) => theme.colors.font.title};
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 0.4rem;
  width: 95%;

  p {
    margin: 0;
    width: 14rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:first-letter {
      text-transform: capitalize;
    }
  }
`
export const TaskFooter = styled.div`
  display: flex;
  flex: 1;
`
export const CommentSummary = styled.div`
  display: flex;
  align-items: center;
  width: 4.5rem;
  margin-left: -0.2rem;
  margin-top: -0.7rem;
`
export const CommentNumber = styled.div`
  margin-left: 0.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.darkestGrey};
`

export const SideElementWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 4.5rem;
  height: 100%;
  font-size: 0.7rem;
`
// impossible to type successfully with attrs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SideElementContent = styled.div.attrs(({ opacity }: { opacity: number }): any => ({
  style: {
    opacity,
  },
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border-radius: 10px;
  height: calc(100% - 1.4rem);
`
export const PostponeContent: typeof SideElementContent = styled(SideElementContent)`
  background-color: ${({ theme }) => theme.colors.actions.postpone};
  margin: 0.7rem -0.5rem 0.7rem 1rem;
`
export const DoneContent = styled(SideElementContent)`
  background-color: ${({ theme }) => theme.colors.actions.done};
  margin: 0.7rem 1rem 0.7rem -0.5rem;
`
export const StyledDoneIcon = styled(DoneIcon)`
  fill: ${({ theme }) => theme.colors.white};
`
export const StyledPostponeIcon = styled(PostponeIcon)`
  fill: ${({ theme }) => theme.colors.white};
`

// Recap modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 2rem;
  padding: 1.5rem;
  width: calc(100% - 7rem);
  height: calc(100% - 7rem);
  background-color: ${({ theme }) => theme.colors.grey};
  z-index: 99;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
export const RecapLabel = styled.div`
  flex-basis: 3rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;

  &:first-letter {
    text-transform: capitalize;
  }
`
export const RecapSectionTitle = styled.div`
  flex-basis: 2rem;
  margin: 2rem 0 0.2rem 0;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkestGrey};
`
export const RecapDescriptionContent = styled.div`
  flex-basis: 8rem;
  overflow: scroll;
`
export const RecapSectionContent = styled.div`
  flex: 1;
  overflow: scroll;
`
export const RecapCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
export const RecapCommentTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkestGrey};
  font-style: italic;
  font-size: 0.9rem;

  svg {
    margin-right: 1rem;
  }
  p {
    margin: 0 0 0.15rem 0;
  }
`
export const RecapCommentContent = styled.div`
  margin-left: 2.5rem;
`
export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem 0 1.75rem 0;
`
