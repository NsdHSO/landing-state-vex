<script setup lang="ts"></script>

<template>
  <div class="container-login">
    <div class="container-login__header">
      <p>Landing</p>
    </div>
    <div class="container-login__form">
      <form>
        <div class="container-login__form-division">
          <label>Username</label>
          <input placeholder="joshi100" />
        </div>
        <div class="container-login__form-division">
          <label>Password</label>
          <input placeholder="********" type="password" />
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

          &:focus {
            opacity: 0.9;
          }

          &:focus-visible {
            outline: none;
          }
        }
      }
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
