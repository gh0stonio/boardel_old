import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Empty from '../components/empty'
import useAuth from '../hooks/useAuth'

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

const Home: NextPage = () => {
  const user = useAuth()

  if (!user) return null

  return (
    <Wrapper>
      <Header />
      <TasksContainer>
        <Empty />
      </TasksContainer>
    </Wrapper>
  )
}

export default Home
