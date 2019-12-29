import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Empty from '../components/empty'
import { StoreProvider } from '../hooks/useStore'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100vh;
`

const TasksContainer = styled.div`
  height: calc(100% - 10.6rem);
  width: 100%;
  position: relative;
  padding-top: 10.6rem;
`

const Home: React.FC = () => {
  return (
    <StoreProvider>
      <Wrapper>
        <Header />
        <TasksContainer>
          <Empty />
        </TasksContainer>
      </Wrapper>
    </StoreProvider>
  )
}

export default Home
