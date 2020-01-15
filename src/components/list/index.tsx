import React from 'react'
import { useSelector } from 'react-redux'

import Empty from '#components/empty'
import Task from '#components/task'
import { getIsLoading, getSelectedDateTasks } from '#store/selectors'

import { LoaderWrapper, StyledLoader, Wrapper } from './styles'

const List: React.FC = () => {
  const tasks = useSelector(getSelectedDateTasks)
  const isLoading = useSelector(getIsLoading)

  return (
    <Wrapper>
      {isLoading ? (
        <LoaderWrapper>
          <StyledLoader width="6rem" height="6rem" />
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
