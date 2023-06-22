<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

const ate = useCounterStore()
const double = computed(() => ate.doubleCount)
</script>

<template>
  <div class="header-container">
    <div class="header-container__search" @click="ate.decrement()">TES</div>
    <div>{{ ate.count }}, Double {{ double }}</div>
    <div @click="ate.increment()">Items</div>
    <router-link :to="{ name: 'Login' }">
      <button>LOGIN PAGE</button>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  padding: 0 4rem 0 2rem;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
