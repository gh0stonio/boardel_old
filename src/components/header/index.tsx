import React, { useState, useMemo, useCallback } from 'react'
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
  ExtandableWrapper,
  TodayCalendar,
  Top,
  Calendar,
} from './styles'
import { useStore } from '../../hooks/useStore'
import { Loader } from '../shared'

const Header: React.FC = () => {
  const {
    state: { selectedDate },
    dispatch,
    actions: { changeDate },
  } = useStore()

  /**
   * Handling dragging menu
   */
  const [startY, setStartY] = useState(0)
  const [extraHeight, setExtraHeight] = useState(0)
  const [isTouched, setIsTouched] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartY(event.targetTouches[0].clientY)
    setIsTouched(true)
  }
  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isTouched) return

    let extra = (event.targetTouches[0].clientY - startY) / 16

    if (isOpen) extra = 14 + extra
    if (extra < 0) extra = 0
    if (extra > 14) extra = 14

    setExtraHeight(extra)
  }
  const onTouchEnd = () => {
    setIsOpen(extraHeight > 7)
    setExtraHeight(extraHeight < 7 ? 0 : 14)
    setIsTouched(false)
  }

  /**
   * Calendar data
   */
  const goToToday = useCallback(() => {
    setExtraHeight(0)
    setIsOpen(false)
    dispatch(changeDate(moment()))
  }, [changeDate, dispatch])
  const weekDays: moment.Moment[] = useMemo(() => {
    const days = []

    for (let i = 1; i < 8; i++) days.push(moment(selectedDate).isoWeekday(i))

    return days
  }, [selectedDate])
  const monthDays: Array<moment.Moment | null> = useMemo(() => {
    const days = []
    const daysInMonth = moment(selectedDate).daysInMonth()

    for (let i = 1; i < daysInMonth + 1; i++) days.push(moment(selectedDate).date(i))

    const isoWeekdayOfFirstMonthDay = days[0].isoWeekday()
    for (let i = 1; i < isoWeekdayOfFirstMonthDay; i++) days.splice(0, 0, null)
    for (let i = days.length; i < 42; i++) days.splice(i, 0, null)

    return days
  }, [selectedDate])
  const daysNames = useMemo(
    () =>
      weekDays.map(day => {
        const name = day.format('dd')
        return (
          <DaysNameItem key={name} isWeekendDay={day.isoWeekday() === 6 || day.isoWeekday() === 7}>
            {name.charAt(0).toUpperCase()}
          </DaysNameItem>
        )
      }),
    [weekDays],
  )
  const generateCalendar = (days: Array<moment.Moment | null>) => {
    const weeks = []
    const clonedDays = days.slice(0)
    while (clonedDays.length) weeks.push(clonedDays.splice(0, 7))

    return weeks.map((week, monthIndex) => {
      return (
        <DaysNumbersBlock key={monthIndex}>
          {week.map((day, dayIndex) => {
            if (!day) return <DaysNumberItem key={`${monthIndex}_${dayIndex}`} />

            const number = day.format('D')
            const onClick = () => {
              setExtraHeight(0)
              setIsOpen(false)
              dispatch(changeDate(day))
            }

            return (
              <DaysNumberItem key={`${monthIndex}_${dayIndex}`} active={day.isSame(selectedDate, 'day')} onClick={onClick}>
                {number}
              </DaysNumberItem>
            )
          })}
        </DaysNumbersBlock>
      )
    })
  }

  return (
    <Container extraHeight={extraHeight}>
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
      <ExtandableWrapper>
        <Calendar extraHeight={extraHeight}>
          <DaysNamesBlock>{daysNames}</DaysNamesBlock>
          {isTouched ? <Loader /> : <>{generateCalendar(isOpen ? monthDays : weekDays)}</>}
        </Calendar>
        <Bottom onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} />
      </ExtandableWrapper>
    </Container>
  )
}

export default Header
