import React from 'react'

import { Container, StyledSuccessIcon, SuccessText } from './styles'
import { useStore } from '../../hooks/useStore'

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
