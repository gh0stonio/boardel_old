import React from 'react'
import styled, { css } from 'styled-components'

type Category = 'personal' | 'professional'

/* PAGE STYLES */
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  flex: 11;
  padding: 0.8rem 0;
  overflow-y: scroll;
`

const AddTask = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.darkGrey};

  svg {
    position: absolute;
    left: 8%;
    top: 8%;
    fill: ${({ theme }) => theme.colors.white};
  }
`

/* TASK STYLES */
const TaskContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.darkGrey};
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
  font-size: 0.95rem;
  font-weight: 500;
`
const TaskDescription = styled.div`
  margin: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.font.content};
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

/* HEADER STYLES */
const HeaderContainer = styled.div`
  flex-basis: 130px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 0.8rem;
  flex: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.darkGrey};
`
const HeaderTop = styled.div`
  flex-basis: 35px;
  position: relative;
`
const BurgerMenu = styled.div`
  position: absolute;
  left: 0;
  top: 1px;
`
const Month = styled.div`
  margin: 0;
  position: absolute;
  top: 15%;
  left: 45%;
  font-size: 1.2rem;
  font-weight: 500;
`
const TodayCalendar = styled.div`
  position: absolute;
  right: 0;
  top: 3px;
`
const HeaderCalendar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`
const HeaderCalendarDaysNames = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`
const HeaderCalendarDaysName = styled.div`
  flex: 1;
  margin: auto;
  color: ${({ theme }) => theme.colors.font.content};
  font-size: 0.9rem;
`
const HeaderCalendarDaysNumbers = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`
const HeaderCalendarDaysNumber = styled.div<{ active?: boolean }>`
  flex: 1;
  position: relative;
  margin: auto;
  font-size: 0.9rem;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.white};

      &:after {
        content: '';
        padding: 5px;
        position: absolute;
        left: 18%;
        background: #5779ff;
        width: 45%;
        height: 150%;
        border-radius: 40%;
        margin-top: -9px;
        z-index: -1;
      }
    `}
`
const HeaderBottom = styled.div`
  flex-basis: 15px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 45%;
    background: ${({ theme }) => theme.colors.darkGrey};
    width: 10%;
    height: 4px;
    border-radius: 2px;
    margin-top: 10px;
  }
`

/* COMPONENTS */
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <BurgerMenu>
          <svg viewBox="0 0 22 24" width="2rem" height="2rem">
            <path
              d="M4 16h12a1 1 0 010 2H4a1 1 0 010-2zm0-5h16a1 1 0 010 2H4a1 1 0 010-2zm0-5h14a1 1 0 010 2H4a1 1 0 110-2z"
              fillRule="nonzero"
              fill="#000"
            />
          </svg>
        </BurgerMenu>

        <Month>May</Month>

        <TodayCalendar>
          <svg viewBox="0 0 100 125" width="2rem" height="2rem">
            <path d="M88.4 13H84V8c0-1.7-1.3-3-3-3h-2c-1.6 0-3 1.3-3 3v5H24V8c0-1.7-1.3-3-3-3h-2c-1.6 0-3 1.3-3 3v5h-4.4C8 13 5 16.1 5 19.9V88c0 3.8 3 6.9 6.6 6.9h76.8c3.6 0 6.6-3.1 6.6-6.9V19.9c0-3.8-3-6.9-6.6-6.9zM87 21v13H13V21h74zM13 87V42h74v45H13zm53.6-29.2L46 78.4c-.3.3-.6.4-1 .4s-.7-.1-1-.4L32.8 67.1c-.5-.5-.5-1.4 0-1.9l4.9-4.9c.5-.5 1.4-.5 1.9 0l5.6 5.6L60 51.2c.5-.5 1.4-.5 1.9 0l4.7 4.7c.5.5.5 1.4 0 1.9z" />
          </svg>
        </TodayCalendar>
      </HeaderTop>
      <HeaderCalendar>
        <HeaderCalendarDaysNames>
          <HeaderCalendarDaysName>M</HeaderCalendarDaysName>
          <HeaderCalendarDaysName>T</HeaderCalendarDaysName>
          <HeaderCalendarDaysName>W</HeaderCalendarDaysName>
          <HeaderCalendarDaysName>T</HeaderCalendarDaysName>
          <HeaderCalendarDaysName>F</HeaderCalendarDaysName>
          <HeaderCalendarDaysName>S</HeaderCalendarDaysName>
          <HeaderCalendarDaysName>S</HeaderCalendarDaysName>
        </HeaderCalendarDaysNames>
        <HeaderCalendarDaysNumbers>
          <HeaderCalendarDaysNumber>6</HeaderCalendarDaysNumber>
          <HeaderCalendarDaysNumber>7</HeaderCalendarDaysNumber>
          <HeaderCalendarDaysNumber>8</HeaderCalendarDaysNumber>
          <HeaderCalendarDaysNumber>9</HeaderCalendarDaysNumber>
          <HeaderCalendarDaysNumber>10</HeaderCalendarDaysNumber>
          <HeaderCalendarDaysNumber active>11</HeaderCalendarDaysNumber>
          <HeaderCalendarDaysNumber>12</HeaderCalendarDaysNumber>
        </HeaderCalendarDaysNumbers>
      </HeaderCalendar>
      <HeaderBottom />
    </HeaderContainer>
  )
}
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
      <AddTask>
        <svg viewBox="0 0 100 100" width="3rem" height="3rem">
          <path
            style={{
              textIndent: 0,
              textTransform: 'none',
            }}
            d="M50 23a4 4 0 00-4 4v19H27a4 4 0 100 8h19v19a4 4 0 108 0V54h19a4 4 0 100-8H54V27a4 4 0 00-4-4z"
            overflow="visible"
            color="#000"
          />
        </svg>
      </AddTask>
    </Wrapper>
  )
}

export default IntegrationPage
