import styled from 'styled-components'

export const LoaderWrapper = styled.svg<{ width?: string; height?: string }>`
  margin: auto;
  width: ${({ width }) => width || '3.2rem'};
  height: ${({ height }) => height || '3.2rem'};
`
