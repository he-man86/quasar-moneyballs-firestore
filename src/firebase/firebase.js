import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, initializeAuth, indexedDBLocalPersistence } from 'firebase/auth'
import { Capacitor } from '@capacitor/core'

const firebaseConfig = {
  apiKey: "AIzaSyC9Yc9WXyZKiF_exf5DUOjfQOkTQ9pXEkM",
  authDomain: "fieldservice-app-10521.firebaseapp.com",
  projectId: "fieldservice-app-10521",
  storageBucket: "fieldservice-app-10521.appspot.com",
  messagingSenderId: "244614483521",
  appId: "1:244614483521:web:358a6d85093a6308d980c0",
  measurementId: "G-4047PCH4QH",
}

function whichAuth() {
  let auth
  if (Capacitor.isNativePlatform()) {
    auth = initializeAuth(app, {
      persistence: indexedDBLocalPersistence
    })
  } else {
    auth = getAuth()
  }
  return auth
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = whichAuth()

export {
  db,
  auth
}
