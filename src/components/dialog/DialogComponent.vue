<script setup lang="ts">
defineProps({
  openDialog: Boolean
})
</script>

<template>
  <teleport to="body">
    <div v-if="openDialog" class="modal">
      <slot />
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: absolute;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: var(--color-sidebar-back);
  padding: 1rem;
  box-shadow: var(--shadow-table);
  border-radius: 1rem;
}
</style>
