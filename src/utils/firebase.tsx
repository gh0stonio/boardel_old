import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD5oAmFUazTh8vuLLEUoRRq4HHBJfAxeBY',
  authDomain: 'boardel-9e2fc.firebaseapp.com',
  databaseURL: 'https://boardel-9e2fc.firebaseio.com',
  projectId: 'boardel-9e2fc',
  storageBucket: 'boardel-9e2fc.appspot.com',
  messagingSenderId: '505142498081',
  appId: '1:505142498081:web:3941200f2e0314b0622460',
  measurementId: 'G-CVVCJH952G',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
