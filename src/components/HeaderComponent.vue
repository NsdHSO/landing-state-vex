<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useYoungList } from '@/stores/youngList'

const ate = useCounterStore()
const youngList = useYoungList()
const double = computed(() => ate.doubleCount)
const authStore = useAuthStore()
const navigateTo = () => {
  authStore.logOut()
}
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-container__search" @click="ate.decrement()">TES</div>
      <div>{{ ate.count }}, Double {{ double }}</div>
      <div>
        {{ youngList.groups }}
      </div>
      <div @click="ate.increment()">Items</div>
    </div>
    <div class="header-container__action">
      <button @click="navigateTo">Log out</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  &-container {
    padding: 0 4rem 0 2rem;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &__action {
      padding-right: 2rem;

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
}
</style>
