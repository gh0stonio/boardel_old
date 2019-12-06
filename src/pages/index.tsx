import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-color: #1b2b39;
`

const WIP = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60%;

  @media screen and (min-width: 1024px) {
    width: 980px;
  }
`

const Home = () => {
  return (
    <Wrapper>
      <WIP src='/WIP.png' alt='work in progress' />
    </Wrapper>
  )
}

export default Home
