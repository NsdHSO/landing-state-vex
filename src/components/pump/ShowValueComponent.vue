<script setup lang="ts"></script>

<template>
  <div>
    <input type="number" />
    <div>
      <label for="">TE</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 10rem;
  height: 3rem;
  background: var(--color-sidebar-back);

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
</style>
