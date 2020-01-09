import React from 'react'

import { useStore } from '#hooks/useStore'

import { Container, StyledSuccessIcon, SuccessText } from './styles'

const Empty: React.FC = () => {
  const {
    state: { isToday },
  } = useStore()

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
