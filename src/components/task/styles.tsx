import styled from 'styled-components'

export const TaskContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 1rem 1.5rem;
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
