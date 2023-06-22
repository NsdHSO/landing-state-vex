<script setup lang="ts"></script>

<template>
  <div class="container-auth">
    <div class="container-auth__data">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-auth {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  &__data {
    background: var(--color-sidebar-back);
    border: 1px solid var(--color-active-link);
    border-radius: 0.8rem;
    color: var(--color-text);
    font-size: 0.9rem;
    font-weight: 500;
    width: 20vw;
    height: 60vh;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (min-width: 308px) and(max-width: 959px) {
      width: 100vw;
      height: 100vh;
    }
  }
}
</style>
