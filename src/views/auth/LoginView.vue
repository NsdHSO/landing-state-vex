<script setup lang="ts">
//Credential reactive
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const credentials = reactive({
  email: '',
  password: ''
})
const emailIsNotValid = ref(false)
const passwordIsNotValid = ref(false)
const authStore = useAuthStore()
const loginHandle = () => {
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!credentials.email || !credentials.password) {
    console.log('Your username and password it is a must  ')
  } else {
    if (regexPattern.test(credentials.email) && credentials.password.length >= 6) {
      authStore.registerWithEmail(credentials)
      credentials.email = ''
      credentials.password = ''
      emailIsNotValid.value = false
      passwordIsNotValid.value = false
    }
    if (!regexPattern.test(credentials.email)) {
      emailIsNotValid.value = true
    }
    if (credentials.password.length < 6) {
      passwordIsNotValid.value = true
    }
  }
}
</script>

<template>
  <div class="container-login">
    <div class="container-login__header">
      <p>Landing</p>
    </div>
    <div class="container-login__form">
      <form @submit.prevent="loginHandle">
        <div class="container-login__form-division">
          <label>Username</label>
          <input placeholder="joshi100@fardex.com" v-model="credentials.email" type="email" />
          <p v-if="emailIsNotValid" class="container-login__form-division-error">
            Email is not valid
          </p>
        </div>
        <div class="container-login__form-division">
          <label>Password</label>
          <input placeholder="********" type="password" v-model="credentials.password" />
          <p v-if="passwordIsNotValid" class="container-login__form-division-error">
            Password is to short
          </p>
        </div>
        <div class="container-login__form-submit">
          <button>Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-login {
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2.5rem;
      font-weight: 600;
      padding: 1rem;

      &:hover {
        animation: bounce-in 0.4s;
      }
    }
  }

  &__form {
    padding: 5rem;

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .container-login__form-division {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
          font-size: 1.5rem;
        }

        input {
          border: none;
          border-bottom: 2px solid var(--color-active-link);
          background: none;
          padding-bottom: 0.2rem;
          padding-left: 0.5rem;
          transition: 0.2s all;
          font-size: 1rem;
          caret-color: var(--color-active-link);
          caret-shape: block;

          &:focus {
            opacity: 0.9;
          }

          &:focus-visible {
            outline: none;
          }
        }

        &-error {
          color: #f14668;
        }
      }

      .container-login__form-submit {
        height: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
          height: 2rem;
          background: var(--color-sidebar-back);
          border: 1px solid var(--color-active-link);
          border-radius: 0.8rem;
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;

          &:hover {
            background: var(--color-primary-hover);
            font-weight: 700;
            color: #fdfffe;
          }
        }
      }
    }

    @media only screen and (min-width: 959px) and (max-width: 1109px) {
      padding: 2rem;
    }
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
    color: var(--color-text-transition);
  }
  50% {
    transform: scale(1.01);
    color: var(--color-text-transition-intermediate);
  }
  70% {
    color: #e2d1d1;
  }
  100% {
    transform: translate(0);
    color: var(--color-text-transition);
  }
}
</style>
