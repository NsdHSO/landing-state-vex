<script setup lang="ts">
defineProps({
  openDialog: Boolean
})
</script>

<template>
  <teleport to="body">
    <div v-if="openDialog" class="modal-container">
      <div class="modal-container-slot">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.modal-container {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &-slot {
    width: 300px;
    background: var(--color-sidebar-back);
    padding: 1rem;
    box-shadow: var(--shadow-table);
    border-radius: 1rem;
  }
}
</style>
