<script setup lang="ts">
import { shallowRef, watchEffect } from 'vue'
import LayoutComponent from '@/components/dahsboard-components/LayoutComponent.vue'
import { useRoute, useRouter } from 'vue-router'

const componentWhatRender = shallowRef(null)
const router = useRouter()
const route = useRoute()
const container = shallowRef(null)

const renderDynamicComponent = (id, component) => {
  if (component === 'LayoutComponent') {
    componentWhatRender.value = LayoutComponent
  }

  // Add more conditions as needed for other components
}
const handleClickOutside = (event) => {
  if (event.target.children[0]?.className === 'container-young') {
    // Perform the navigation action, e.g., go back to the previous route
    router.push('/landing-state-vex/dashboard')
  }
}

watchEffect(
  () => [router.params?.id, route.query?.component],
  renderDynamicComponent(router.params?.id, route.query?.component)
)
</script>

<template>
  <div class="container" ref="container" @click="handleClickOutside">
    <div class="container-young">
      <component :is="componentWhatRender"></component>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: absolute;
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
  top: 0;

  &-young {
    position: absolute;
    top: 4rem;
    right: 0;
    width: calc(100vw - 4rem - 20%);
    height: calc(100vh - 4rem);
    background: var(--color-background);
    box-shadow: var(--color-shadow-sidenav);
    transition: 0.4s all;
    z-index: 50;
  }
}
</style>
