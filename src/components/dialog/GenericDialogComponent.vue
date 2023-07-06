<script setup lang="ts">
defineProps({
  title: String,
  closeButton: Boolean
})
</script>

<template>
  <div class="generic-container">
    <p>
      {{ title }}
    </p>
    <div class="generic-container__action" v-if="!closeButton">
      <button
        @click="$emit('genericMsg', true)"
        class="generic-container__action-yes"
      >
        Yes
      </button>
      <button
        @click="$emit('genericMsg', false)"
        class="generic-container__action-no"
      >
        No
      </button>
    </div>
    <slot />
  </div>
  <div
    class="generic-container__close"
    v-if="closeButton"
    @click="$emit('genericMsg', 'closeModal')"
  >
    <vex-icon :icon="['fas', 'xmark']" />
  </div>
</template>

<style scoped lang="scss">
.generic-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

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

      &:hover {
        opacity: 0.6;
      }
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
  &__close svg {
    height: 2rem;
    width: 2rem;
    transition: all 0.5s;
    &:hover {
      color: var(--color-danger);
    }
  }
}
</style>
