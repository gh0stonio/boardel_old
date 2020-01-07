import styled from '../../utils/styled'
import { DoneIcon, PostponeIcon, WorkIcon, PersonalIcon } from '../icons'
import { Category } from '../../constants'

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
export const TaskCategory = styled.div<{ category: Category }>`
  position: relative;
  background-color: ${({ theme, category }) => theme.colors.categories[category]};
  flex-basis: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
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
export const TaskDescription = styled.div`
  margin: 0.5rem 1.5rem 0.5rem 0;
  color: ${({ theme }) => theme.colors.font.content};
  font-size: 0.8rem;
  height: 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
export const PostponeContent = styled(SideElementContent)`
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
