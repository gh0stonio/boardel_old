import firebase from '../utils/firebase'

export const logAnonymously = () => {
  firebase
    .auth()
    .signInAnonymously()
    .catch(error => {
      console.error(error)
    })

  firebase.auth().onAuthStateChanged(user => {
    if (!process.browser) return

    if (user) localStorage.setItem('session', JSON.stringify({ uid: user.uid }))
    else localStorage.removeItem('session')
  })
}
