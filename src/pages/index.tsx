import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Empty from '../components/empty'
import { StoreProvider } from '../hooks/useStore'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const TasksContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  flex: 1;
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
