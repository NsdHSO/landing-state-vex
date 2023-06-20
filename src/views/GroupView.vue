<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useYoungList } from '@/stores/youngList'

const groupNumber = ref('')
const countNumber = ref('')
const leaderName = ref('')
const route = useRoute()
const router = useRouter()
const youngStore = useYoungList()

onMounted(() => {
  if (route.params.id !== 'new') {
    const { group, count, leader } = youngStore.pickOneYoung(+route.params.id)
    groupNumber.value = group
    countNumber.value = count + ''
    leaderName.value = leader
  }
})
const handleSubmit = () => {
  if (route.params.id === 'new') {
    if (groupNumber.value > 0) {
      youngStore.addOneEntry({
        group: groupNumber.value,
        count: +countNumber.value,
        leader: leaderName.value
      })
      router.push('/landing-state-vex/dashboard')
    }
  } else {
    youngStore.changeOneEntry(+groupNumber.value, {
      group: groupNumber.value,
      count: +countNumber.value,
      leader: leaderName.value
    })
  }
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form-submit">
      <button>Send Data</button>
    </div>
    <div class="form-group">
      <div class="form-group-cat">
        <label>Group</label>
        <input
          v-model="groupNumber"
          placeholder="Group Number"
          :readonly="route.params.id !== 'new'"
          type="number"
        />
      </div>
      <div class="form-group-cat">
        <label>How manny are in group</label>
        <input v-model="countNumber" placeholder="Count Number" type="number" />
      </div>
      <div class="form-group-cat">
        <label>Leader</label>
        <input v-model="leaderName" placeholder="Leader Name" />
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  &-group {
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-cat {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 700;
        font-size: 1.2rem;
      }

      input {
        height: 2rem;
        color: var(--color-text-table);
        background: var(--color-zebra-cell);
        outline: none;
        border: none;
        font-size: 1rem;
        padding: 0.3rem 0.3rem 0.3rem 1rem;
        border-radius: 0.3rem;
        transition: 0.2s all;
        border-color: var(--color-sidebar-back);

        &:focus {
          opacity: 0.9;
          border-color: var(--color-sidebar-back);
          border-width: 2px;
          border-style: solid;
        }
      }
    }
  }

  &-submit {
    height: 3rem;
    display: flex;
    flex-direction: row-reverse;

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
}
</style>
