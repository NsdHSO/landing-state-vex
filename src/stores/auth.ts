import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
//import auht from firebase
export const useAuthStore = defineStore('auth', {
  state: () => ({}),
  getters: {},
  actions: {
    registerWithEmail(credentaial: { email: string; password: string }) {
      createUserWithEmailAndPassword(auth, credentaial.email, credentaial.password)
        .then((value) => {
          console.log(value)
        })
        .catch((err) => console.log(err))
    }
    //register with firebase create user with name and password
  }
})
