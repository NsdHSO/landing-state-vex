<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="generic-container">
    <p>
      {{ title }}
    </p>
    <div class="generic-container__action">
      <button @click="$emit('genericMsg', true)" class="generic-container__action-yes">Yes</button>
      <button @click="$emit('genericMsg', false)" class="generic-container__action-no">No</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.generic-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    font-size: 1.2rem;
    font-weight: 600;
  }

  &__action {
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    button {
      padding: 0.2rem 1rem;
      font-size: 1.3rem;
    }

    &-yes {
      color: white;
      background: var(--color-danger);
    }

    &-no {
      color: white;
      background: var(--color-active-link);
    }
  }
}
</style>
