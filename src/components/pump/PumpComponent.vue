<script setup lang="ts">
import ShowValueComponent from './ShowValueComponent.vue'
</script>

<template>
  <div class="pump">
    <div class="pump__top">
      <div>Icon</div>
      <div>
        <ShowValueComponent />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pump {
  padding: 1rem;

  &__top {
    div {
      width: 50%;
    }

    display: flex;
  }
}
</style>
