import moment from 'moment'
import React, { useCallback, useMemo, useState } from 'react'

import { useStore } from '#hooks/useStore'

import {
  Bottom,
  Calendar,
  Container,
  CurrentMonth,
  DaysNameItem,
  DaysNamesBlock,
  DaysNumberItem,
  DaysNumbersBlock,
  ExtandableWrapper,
  StyledBurgerMenuIcon,
  StyledLoader,
  StyledTodayIcon,
  Top,
} from './styles'

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
  const monthDays: moment.Moment[] = useMemo(() => {
    const days = []
    const daysInMonth = moment(selectedDate).daysInMonth()

    for (let i = 1; i < daysInMonth + 1; i++) days.push(moment(selectedDate).date(i))

    const isoWeekdayOfFirstMonthDay = days[0].isoWeekday()
    for (let i = 1; i < isoWeekdayOfFirstMonthDay; i++)
      days.splice(
        0,
        0,
        moment(days[0])
          .clone()
          .subtract(i, 'days'),
      )
    const nbrToFill = 42 - days.length
    for (let i = 1; i <= nbrToFill; i++) {
      days.splice(
        days.length,
        0,
        moment(days[days.length - 1])
          .clone()
          .add(1, 'days'),
      )
    }

    return days
  }, [selectedDate])
  const daysNames = useMemo(
    () =>
      weekDays.map(day => {
        const name = day.format('dd')
        return <DaysNameItem key={name}>{name.charAt(0).toUpperCase()}</DaysNameItem>
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
            const number = day.format('D')
            const onClick = () => {
              setExtraHeight(0)
              setIsOpen(false)
              dispatch(changeDate(day))
            }

            return (
              <DaysNumberItem
                key={`${monthIndex}_${dayIndex}`}
                extra={!day.isSame(selectedDate, 'month')}
                active={day.isSame(selectedDate, 'day')}
                onClick={onClick}
              >
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
        <StyledBurgerMenuIcon />
        <CurrentMonth>{selectedDate.format('MMMM')}</CurrentMonth>
        <StyledTodayIcon onClick={goToToday} />
      </Top>
      <ExtandableWrapper>
        <Calendar extraHeight={extraHeight}>
          <DaysNamesBlock>{daysNames}</DaysNamesBlock>
          {isTouched ? <StyledLoader /> : <>{generateCalendar(isOpen ? monthDays : weekDays)}</>}
        </Calendar>
        <Bottom onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} />
      </ExtandableWrapper>
    </Container>
  )
}

export default Header
