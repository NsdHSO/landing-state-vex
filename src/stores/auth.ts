import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
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
  getters: {
    state: () => {}
  },
  actions: {
    registerWithEmail(credentaial: UserCredential) {
      createUserWithEmailAndPassword(
        auth,
        credentaial.email,
        credentaial.password
      )
        .then((value) => {
          console.log(value)
        })
        .catch((err) => console.log(err))
    },
    loginWithEmail(credential: UserCredential) {
      signInWithEmailAndPassword(auth, credential.email, credential.password)
        .then((userCredentials) => {
          // Signed in
          if (userCredentials) {
            this.user = userCredentials.user
            this.router.push('/')
          } else {
            this.user = {}
          }
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
    },
    //register with firebase create user with name and password
    logOut() {
      localStorage.clear()
      this.user = {}
      this.router.push({
        name: 'Login',
        params: { id: 'login' }
      })
    }
  },
  persist: {
    storage: localStorage // data in sessionStorage is cleared when the page session ends.
  }
})
