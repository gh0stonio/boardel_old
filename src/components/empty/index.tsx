import React from 'react'
import { useSelector } from 'react-redux'

import { getIsToday } from '#store/selectors'

import { Container, StyledSuccessIcon, SuccessText } from './styles'

const Empty: React.FC = () => {
  const isToday = useSelector(getIsToday)

  return (
    <Container>
      <StyledSuccessIcon />
      <SuccessText>
        Yeah \o/
        <br />
        No more tasks for {isToday ? 'today' : 'this day'}.
      </SuccessText>
    </Container>
  )
}

export default Empty
