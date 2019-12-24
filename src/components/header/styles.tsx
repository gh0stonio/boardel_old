import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex-basis: 9rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 0.8rem;
  flex: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.darkGrey};
`

/**
 * TOP SECTION
 */
export const Top = styled.div`
  flex-basis: 2.25rem;
  position: relative;
  text-align: center;
`
export const BurgerMenu = styled.svg`
  position: absolute;
  left: 0;
  top: 0.0625rem;
`
export const CurrentMonth = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 100%;
  height: 100%;
  margin-top: 0.5rem;
`
export const TodayCalendar = styled.svg`
  position: absolute;
  right: 0;
  top: 0.1875rem;
`

/**
 * CALENDAR
 */
export const WeekCalendar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const DaysNamesBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`
export const DaysNameItem = styled.div`
  flex: 1;
  margin: auto;
  color: ${({ theme }) => theme.colors.font.content};
  font-size: 0.9rem;
`
export const DaysNumbersBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`
export const DaysNumberItem = styled.div<{ active?: boolean }>`
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
        padding: 0.3125rem;
        position: absolute;
        left: 18%;
        background: #5779ff;
        width: 45%;
        height: 150%;
        border-radius: 40%;
        margin-top: -0.5625rem;
        z-index: -1;
      }
    `}
`

/**
 * BOTTOM SECTION
 */
export const Bottom = styled.div`
  flex-basis: 1rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 45%;
    background: ${({ theme }) => theme.colors.darkGrey};
    width: 10%;
    height: 0.25rem;
    border-radius: 0.125rem;
    margin-top: 0.625rem;
  }
`
