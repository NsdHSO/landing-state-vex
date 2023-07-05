<script setup lang="ts">
defineProps({
  label: String,
  model: String
})
</script>
<template>
  <div>
    <input type="number" v-bind="model" />
    <div class="show-value__label">
      <label for="">{{ label }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 10rem;
  height: 3rem;
  background: var(--color-sidebar-back);
  font-family: digital;
  font-size: 3rem;
  border: none;
  border-radius: 1rem;
  color: var(--color-active-link);
  padding: 0 0.6rem;
  &:focus,
  &:active,
  &:focus-visible {
    border: none;
    outline: none;
  }

  &:focus-visible {
    outline: var(--color-hover);
    border: 1px solid var(--color-hover);
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
}

label {
  font-size: 1.5rem;
}
.show-value__label {
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    font-weight: bold;
  }
}
</style>
