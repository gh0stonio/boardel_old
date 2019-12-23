import React from 'react'
import styled from 'styled-components'

type Category = 'personal' | 'professional'

/* PAGE STYLES */
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  flex: 3;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.darkGrey};
`

const Container = styled.div`
  flex: 11;
  padding: 0.8rem 0;
  overflow-y: scroll;
`

/* TASK STYLES */
const TaskContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 1rem 1.5rem;
  border-radius: 10px;
  z-index: 1;
`
const TaskCategory = styled.div<{ category: Category }>`
  background-color: ${({ theme, category }) => theme.colors.categories[category]};
  position: absolute;
  left: 0;
  top: 0;
  width: 0.45rem;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const TaskTitle = styled.div`
  padding: 1rem 1.5rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.font.title};
  font-family: 'Roboto', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
`
const TaskDescription = styled.div`
  margin: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.font.content};
  font-family: 'Roboto', sans-serif;
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
const TaskFooter = styled.div`
  min-height: 1.5rem;
`

/* COMPONENTS */
const Task = ({ category }: { category: Category }) => {
  return (
    <TaskContainer>
      <TaskCategory category={category} />
      <TaskTitle>Task title</TaskTitle>
      <TaskDescription>
        Short description on one or two lines with some blabla in it and sometime a lot of blabla and some other blablabla
      </TaskDescription>
      <TaskFooter />
    </TaskContainer>
  )
}
const IntegrationPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Task category="personal" />
        <Task category="personal" />
        <Task category="professional" />
        <Task category="personal" />
        <Task category="professional" />
        <Task category="personal" />
        <Task category="professional" />
        <Task category="professional" />
      </Container>
    </Wrapper>
  )
}

export default IntegrationPage
