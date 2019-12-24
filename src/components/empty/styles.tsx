import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
`

export const SuccessIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.darkestGrey};
`

export const SuccessText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkestGrey};
  font-size: 1.2rem;
`
