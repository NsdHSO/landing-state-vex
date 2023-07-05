<script setup lang="ts"></script>

<template>
  <div>
    <div class="wrapper-calc">
      <div
        class="wrapper-calc__key"
        v-for="(item, key) in Array.from({ length: 13 })
          .map((itemInner, index) => {
            if (index >= 1) {
              if (index === 10) {
                return null
              }
              if (index === 11) {
                return 0
              }
              if (index === 12) {
                return 'Clear'
              }
              return index
            }
          })
          .filter((value) => value !== undefined && value !== null)"
        :key="key"
        @click="$emit('keyPress', { item: item })"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-calc {
  display: flex;
  width: 11rem;
  gap: 0.7rem;
  flex-wrap: wrap;

  :last-child {
    width: max-content;
    max-width: max-content;
  }

  &__key {
    width: 2rem;
    max-width: 2rem;
    height: 3rem;
    max-height: 3rem;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid var(--color-sidebar-back);
    border-radius: 0.4rem;
    padding: 1.5rem;
    font-size: 3rem;
  }
}
</style>
