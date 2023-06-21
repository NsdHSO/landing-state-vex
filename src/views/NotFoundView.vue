<script setup lang="ts"></script>

<template>
  <div class="not-found-container">
    <div class="not-found-container__title">Page not found</div>
    <div>
      <router-link :to="{ name: 'Dashboard' }">
        <button>Go to Dashboard</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-container {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__title {
    font-size: 3rem;
  }
  button {
    height: 2.4rem;
    background: var(--color-sidebar-back);
    border: 1px solid var(--color-active-link);
    border-radius: 0.8rem;
    color: var(--color-text);
    font-size: 1.9rem;
    font-weight: 500;

    &:hover {
      background: var(--color-primary-hover);
      font-weight: 700;
      color: #fdfffe;
    }
  }
}
</style>
