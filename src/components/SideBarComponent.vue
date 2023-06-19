<script setup lang="ts">
import IconTooling from '@/components/icons/IconTooling.vue'

defineProps({
  routes: {
    required: true
  }
})
</script>

<template>
  <div class="container-side-bar">
    <div class="container-side-bar__icon">
      <router-link to="/">
        <IconTooling />
      </router-link>
    </div>
    <div class="container-side-bar-container">
      <div v-for="(route, key) in routes" :key="key" class="container-side-bar-container__paths">
        <router-link :to="route.path">
          <div class="container-side-bar-container__paths-icon">
            <vex-icon :icon="['fas', route.icon]" />
          </div>
          <div class="container-side-bar-container__paths-name">
            {{ route.name }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-side-bar {
  height: 100%;
  background: var(--color-sidebar-back);

  &__icon {
    height: 4rem;
    width: 4rem;
    min-height: 4rem;
    min-width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 4rem;
    margin-bottom: 2rem;

    svg {
      height: 3rem;
    }

    .router-link-exact-active:hover {
      transition: 0.31s all;
      transform: rotate(720deg) scale(1.3);
      opacity: 0.8;
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 0.5rem;
    padding: 0 0.42rem;

    &__paths {
      border: 1px solid var(--color-border);
      border-radius: 2rem;

      &:not(.router-link-exact-active) {
        padding-left: 0;
      }

      padding-left: 0.5rem;

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0.15rem;

        svg {
          width: 1.9rem;
          height: 1.9rem;
        }
      }
    }

    .container-side-bar-container__paths {
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        outline: none;
        gap: 1rem;
      }

      .router-link{
        &exact, &exact-active {
        }
        border-radius: 1rem;
        border: 2px solid var(--color-border);
        background: var(--color-bg-active-link);
      }

      &-name {
        overflow: hidden;
        font-weight: 700;
        width: 50%;
      }

      &:hover {
        border-radius: 1rem;
        background: var(--color-border-hover);
        opacity: 0.9;
        transform: scale(1.01);
      }
    }
  }
}
</style>
