import styled, { css } from 'styled-components'

// impossible to type successfully with attrs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Container = styled.div.attrs(({ extraHeight }: { extraHeight: number }): any => ({
  style: {
    height: `calc(9rem + ${extraHeight}rem)`,
  },
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 1.6rem);
  min-height: 9rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.darkGrey};
  touch-action: none;
`

/**
 * TOP SECTION
 */
export const Top = styled.div`
  min-height: 2.25rem;
  max-height: 2.25rem;
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
 * EXTANDABLE WRAPPER
 */
export const ExtandableWrapper = styled.div`
  position: relative;
  height: inherit;
`

/**
 * CALENDAR
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Calendar = styled.div.attrs(({ extraHeight }: { extraHeight: number }): any => ({
  style: {
    height: `calc(6rem + ${extraHeight}rem)`,
  },
}))`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const DaysNamesBlock = styled.div`
  min-height: 2.8rem;
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
  min-height: 2.8rem;
  display: flex;
  flex-direction: row;
`
export const DaysNumberItem = styled.div.attrs(({ active, extra }: { active?: boolean; extra?: boolean }) => ({
  active,
  extra,
}))`
  flex: 1;
  position: relative;
  margin: auto;
  font-size: 0.9rem;

  color: ${({ extra, theme }) => (extra ? theme.colors.darkGrey : theme.colors.black)};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.white};

      &:after {
        content: '';
        padding: 0.3125rem;
        position: absolute;
        left: 17%;
        background: #5779ff;
        width: 45%;
        height: 155%;
        border-radius: 40%;
        margin-top: -0.6625rem;
        z-index: -1;
      }
    `}
`

/**
 * BOTTOM SECTION
 */
export const Bottom = styled.div`
  position: absolute;
  bottom: -1rem;
  width: 100%;
  height: 2.4rem;

  &:after {
    content: '';
    position: absolute;
    left: 45%;
    bottom: 1rem;
    background: ${({ theme }) => theme.colors.darkGrey};
    width: 10%;
    height: 0.25rem;
    border-radius: 0.125rem;
    margin-top: 0.625rem;
  }
`
