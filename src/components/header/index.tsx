import React, { useMemo, useCallback } from 'react'
import moment from 'moment'

import {
  Bottom,
  BurgerMenu,
  Container,
  CurrentMonth,
  DaysNameItem,
  DaysNamesBlock,
  DaysNumberItem,
  DaysNumbersBlock,
  TodayCalendar,
  Top,
  WeekCalendar,
} from './styles'
import { useStore } from '../../hooks/useStore'

const Header: React.FC = () => {
  const {
    state: { selectedDate },
    dispatch,
    actions: { changeDate },
  } = useStore()

  const weekDays: moment.Moment[] = useMemo(() => {
    const days = []

    for (let i = 1; i < 8; i++) days.push(moment().isoWeekday(i))

    return days
  }, [])

  const daysNames = useMemo(
    () =>
      weekDays.map(day => {
        const name = day.format('dd')
        return <DaysNameItem key={name}>{name.charAt(0).toUpperCase()}</DaysNameItem>
      }),
    [weekDays],
  )

  const daysNumber = useMemo(
    () =>
      weekDays.map(day => {
        const number = day.format('D')
        const onClick = () => dispatch(changeDate(day))

        return (
          <DaysNumberItem key={number} active={day.isSame(selectedDate, 'day')} onClick={onClick}>
            {number}
          </DaysNumberItem>
        )
      }),
    [changeDate, dispatch, selectedDate, weekDays],
  )

  const goToToday = useCallback(() => dispatch(changeDate(moment())), [changeDate, dispatch])

  return (
    <Container>
      <Top>
        <BurgerMenu viewBox="0 0 22 24" width="2rem" height="2rem">
          <path
            d="M4 16h12a1 1 0 010 2H4a1 1 0 010-2zm0-5h16a1 1 0 010 2H4a1 1 0 010-2zm0-5h14a1 1 0 010 2H4a1 1 0 110-2z"
            fillRule="nonzero"
            fill="#000"
          />
        </BurgerMenu>

        <CurrentMonth>{selectedDate.format('MMMM')}</CurrentMonth>

        <TodayCalendar viewBox="0 0 100 125" width="2rem" height="2rem" onClick={goToToday}>
          <path d="M88.4 13H84V8c0-1.7-1.3-3-3-3h-2c-1.6 0-3 1.3-3 3v5H24V8c0-1.7-1.3-3-3-3h-2c-1.6 0-3 1.3-3 3v5h-4.4C8 13 5 16.1 5 19.9V88c0 3.8 3 6.9 6.6 6.9h76.8c3.6 0 6.6-3.1 6.6-6.9V19.9c0-3.8-3-6.9-6.6-6.9zM87 21v13H13V21h74zM13 87V42h74v45H13zm53.6-29.2L46 78.4c-.3.3-.6.4-1 .4s-.7-.1-1-.4L32.8 67.1c-.5-.5-.5-1.4 0-1.9l4.9-4.9c.5-.5 1.4-.5 1.9 0l5.6 5.6L60 51.2c.5-.5 1.4-.5 1.9 0l4.7 4.7c.5.5.5 1.4 0 1.9z" />
        </TodayCalendar>
      </Top>
      <WeekCalendar>
        <DaysNamesBlock>{daysNames}</DaysNamesBlock>
        <DaysNumbersBlock>{daysNumber}</DaysNumbersBlock>
      </WeekCalendar>
      <Bottom />
    </Container>
  )
}

export default Header
