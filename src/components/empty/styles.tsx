import styled from '../../utils/styled'
import { SuccessIcon } from '../icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50%;
`

export const StyledSuccessIcon = styled(SuccessIcon)`
  fill: ${({ theme }) => theme.colors.darkestGrey};
`

export const SuccessText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkestGrey};
  font-size: 1.2rem;
`
