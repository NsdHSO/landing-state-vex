<script setup lang="ts">
import { ref } from 'vue'
const isDialogVisible = ref(false)

const title = ref('')
const message = ref('')
</script>

<template></template>

<style scoped lang="scss">
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &-content {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
  }
}
</style>
