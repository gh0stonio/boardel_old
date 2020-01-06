import { NextPage } from 'next'
import Router from 'next/router'
import { useEffect, useState } from 'react'

import { Loader } from '../components/icons'
import firebase from '../utils/firebase'
import styled from '../utils/styled'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
`

const LoginText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkestGrey};
  font-size: 1.2rem;
  flex-basis: 10rem;
`
const LoginButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Auth: NextPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const firebaseui = require('firebaseui')
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: authResult => {
          localStorage.setItem('session', JSON.stringify({ uid: authResult.user.uid, displayName: authResult.user.displayName }))
          Router.push('/')

          return false
        },
        uiShown: () => setLoading(false),
      },
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    })
  }, [])

  return (
    <Wrapper>
      <LoginText>Please connect to sync your boardEL</LoginText>
      <LoginButtonsWrapper>
        <div id="firebaseui-auth-container"></div>
      </LoginButtonsWrapper>
      {loading && <Loader />}
    </Wrapper>
  )
}

export default Auth
