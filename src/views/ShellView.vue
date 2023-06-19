<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import SideBar from '@/components/SideBarComponent.vue'
</script>

<template>
  <div class="shell-container">
    <div class="shell-container__header">
      <Header />
    </div>
    <div class="shell-container__sidebar">
      <SideBar :routes="$route.meta.routes" />
    </div>
    <div class="shell-container__content">
      <div>
        <router-view ></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shell-container {
  position: relative;
}

.shell-container__sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 3.5rem;
  transition: 0.1s ease-in; /* Default transition */
}

.shell-container__sidebar:hover {
  width: 13rem;
  transition: 0.1s ease-out;
  box-shadow: inset 20px 19px 17px 20px hsla(0, 0%, 100%, 0.075),
    4px -7px 20px 20px hsla(0, 0%, 0%, 0.05), 0 0.3px 20px 20px hsla(0, 0%, 0%, 0.02),
    0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 20px 0px 20px 20px hsla(0, 0%, 0%, 0.09);
}

.shell-container__header {
  position: absolute;
  top: 0;
  left: 0;
  height: 7vh;
  max-height: 4rem;
  min-height: 4rem;
  width: 100vw;
  background: var(--color-sidebar-back);
  padding-left: 3rem;
  color: var(--vt-primary-text);
}

.shell-container__content {
  padding: 4rem 1rem 1rem 4rem;
  height: calc(100vh);
}
</style>
