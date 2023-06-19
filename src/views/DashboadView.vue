<script setup
        lang="ts">
import YoungList
    from '@/components/dahsboard-components/YoungList.vue'
</script>

<template>
    <div class="container-dashboard">
        <div class="container-dashboard-first-row">
            <div class="container-dashboard-first-row__division">
                <YoungList/>
            </div>
            <div class="container-dashboard-first-row__division">
                TESD
            </div>
        </div>
        <div class="container-dashboard-second-row">
            <div class="container-dashboard-second-row__division">
                sdddds
            </div>
            <div class="container-dashboard-second-row__division">
                dasd
            </div>
        </div>
    </div>
    <router-view v-slot="{Component, route}">
        <transition name="bounce">
            <component :is="Component" :key="route.path"/>
        </transition>
    </router-view>
</template>
<style lang="scss"
       scoped>
.container-dashboard {
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;

  &-first-row,
  &-second-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    height: 50%;

    &__division {
      width: 50%;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(40rem) translateX(+200rem);
  }
  //50% {
  //  transform: scale(1.25);
  //}
  100% {
    transform: translate(0);
  }
}

</style>
