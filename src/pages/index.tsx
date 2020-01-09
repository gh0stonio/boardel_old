import { NextPage } from 'next'
import Router from 'next/router'

import Header from '#components/header'
import List from '#components/list'
import useAuth from '#hooks/useAuth'
import styled from '#utils/styled'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100vh;
`

const TasksContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 10.6rem;
`

const Home: NextPage = () => {
  const user = useAuth()

  if (!user) {
    if (process.browser) Router.push('/auth')
    return null
  }

  return (
    <Wrapper>
      <Header />
      <TasksContainer>
        <List />
      </TasksContainer>
    </Wrapper>
  )
}

export default Home
