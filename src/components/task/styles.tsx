import styled from '../../utils/styled'
import { DoneIcon, PostponeIcon } from '../icons'

export const TaskContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0.7rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.darkGrey};
`
export const TaskCategory = styled.div<{ category: Category }>`
  background-color: ${({ theme, category }) => theme.colors.categories[category]};
  position: absolute;
  left: 0;
  top: 0;
  width: 0.45rem;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const TaskLabel = styled.div`
  padding: 1rem 1.5rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.font.title};
  font-size: 0.95rem;
  font-weight: 500;
`
export const TaskDescription = styled.div`
  margin: 0.5rem 1.5rem;
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
  min-height: 1.5rem;
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
