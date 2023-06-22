import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

//import auht from firebase

export interface UserCredential {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {}
  }),
  getters: {},
  actions: {
    registerWithEmail(credentaial: UserCredential) {
      createUserWithEmailAndPassword(auth, credentaial.email, credentaial.password)
        .then((value) => {
          console.log(value)
        })
        .catch((err) => console.log(err))
    },
    loginWithEmail(credential: UserCredential) {
      signInWithEmailAndPassword(auth, credential.email, credential.password)
        .then((userCredentials) => {
          // Signed in
          this.user = userCredentials
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
        })
    }
    //register with firebase create user with name and password
  }
})
