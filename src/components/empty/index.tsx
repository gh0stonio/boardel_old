import React from 'react'

import { Container, SuccessIcon, SuccessText } from './styles'
import { useStore } from '../../hooks/useStore'

const Empty: React.FC = () => {
  const {
    state: { isToday },
  } = useStore()

  return (
    <Container>
      <SuccessIcon viewBox="0 0 67 83.75" height="10rem" width="10rem">
        <path d="M6.5 6c-.6 0-1 .4-1 1 0 10.1 6 19.1 15.3 23.1 2.2 3.4 4.9 6.4 8.1 8.8v13.8h-1.4c-.6 0-1 .4-1 1v4.9h-2.4c-.6 0-1 .4-1 1v5.9c0 .6.4 1 1 1h18.8c.6 0 1-.4 1-1v-5.9c0-.6-.4-1-1-1h-2.4v-4.9c0-.6-.4-1-1-1h-1.4V38.9c3.2-2.5 5.9-5.4 8.1-8.9 3-1.3 5.6-3 7.9-5.3 4.7-4.7 7.3-11 7.3-17.7 0-.6-.4-1-1-1h-8.7c0-1.7-.1-3.1 0-4.4 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.7-.3H16.2c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.8.1 1.3.1 2.7 0 4.4H6.5zm1 2h7.7c-.1 6.7.5 12.5 3.8 19C12.2 23 7.9 15.9 7.5 8zm34.4 56.5H25.1v-3.9h16.8v3.9zm-3.4-5.9h-10v-3.9h10.1v3.9zm-7.7-5.9V40.4s.1 0 .1.1c.7.4 1.4.9 2.1 1.3.2.1.3.1.5.1s.3 0 .5-.1c.7-.4 1.4-.8 2.1-1.3 0 0 .1 0 .1-.1v12.3h-5.4zm21.9-29.4c-1.4 1.4-3 2.6-4.7 3.6 3.1-6.2 3.9-11.9 3.8-19h7.7c-.3 5.9-2.6 11.3-6.8 15.4zM17.3 2.5h32.5c-.2 5.5 2.7 25.9-16.3 37.2C15.4 29 17.6 11 17.3 2.5z" />
        <path d="M28.4 19.7l-2.2 6.8c-.1.4 0 .9.4 1.1s.8.3 1.2 0l5.8-4.2 5.8 4.2c.3.3.8.3 1.2 0 .4-.3.5-.7.4-1.1l-2.2-6.8 5.8-4.2c.4-.3.5-.7.4-1.1s-.5-.7-1-.7h-7.2l-2.2-6.8c-.1-.4-.5-.7-1-.7s-.8.3-1 .7l-2.2 6.8h-7.2c-.4 0-.8.3-1 .7s0 .9.4 1.1l5.8 4.2zm2.7-4.1c.4 0 .8-.3 1-.7l1.5-4.6 1.5 4.6c.1.4.5.7 1 .7h4.8L37 18.4c-.4.3-.5.7-.4 1.1l1.5 4.6-3.9-2.8c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2l-4 2.9 1.5-4.6c.1-.4 0-.9-.4-1.1l-3.9-2.8h4.9z" />
      </SuccessIcon>
      <SuccessText>
        Yeah \o/
        <br />
        No more tasks for {isToday ? 'today' : 'this day'}.
      </SuccessText>
    </Container>
  )
}

export default Empty