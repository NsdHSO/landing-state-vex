<script setup lang="ts">
import YoungList from '@/components/dahsboard-components/YoungList.vue'
import { onMounted, shallowReactive } from 'vue'
import { useYoungList } from '@/stores/youngList'
import NextActivityView from '@/views/NextActivityView.vue'

const youngStore = useYoungList()
onMounted(() => {
  youngStore.getYoung()
})

let rev = shallowReactive({ name: 2 })
const clicka = () => {
  rev.name = 43
}
</script>

<template>
  <div class="form-submit">
    <router-link
      :to="{
        name: 'editYoungList',
        params: { id: 'new' },
        query: { component: 'LayoutComponent' }
      }"
    >
      <button>Add Group</button>
    </router-link>
  </div>
  <div class="container-dashboard">
    <div class="container-dashboard-first-row">
      <div class="container-dashboard-first-row__division">
        <YoungList />
      </div>
      <div class="container-dashboard-first-row__division">
        <p>Next Activity</p>
        <NextActivityView />

        <button @click="clicka">TEST BUTTON</button>
      </div>
    </div>
    <div class="container-dashboard-second-row">
      <div class="container-dashboard-second-row__division">sdddds</div>
      <div class="container-dashboard-second-row__division">dasd</div>
    </div>
  </div>
  <router-view v-slot="{ Component, route }">
    <transition name="bounce">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>
<style lang="scss" scoped>
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
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: translate(0);
  }
}

.form-submit {
  align-items: center;
  height: 3rem;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 1rem;

  button {
    height: 2rem;
    background: var(--color-sidebar-back);
    border: 1px solid var(--color-active-link);
    border-radius: 0.8rem;
    color: var(--color-text);
    font-size: 0.9rem;
    font-weight: 500;

    &:hover {
      background: var(--color-primary-hover);
      font-weight: 700;
      color: #fdfffe;
    }
  }
}
</style>
