<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style scoped>
:deep(.router-link-exact-active) {
  color: var(--color-active-link);
}
</style>
