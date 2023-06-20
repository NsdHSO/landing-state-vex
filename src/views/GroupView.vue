<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useYoungList } from '@/stores/youngList'

const groupNumber = ref('')
const countNumber = ref('')
const leaderName = ref('')
const route = useRoute()
const youngStore = useYoungList()

onMounted(() => {
  if (route.params.id !== 'new') {
    const { group, count, leader } = youngStore.pickOneYoung(+route.params.id)

    groupNumber.value = group
    countNumber.value = count + ''
    leaderName.value = leader
  }
})
</script>

<template>
  <div>
    <input v-model="groupNumber" placeholder="Group Number" readonly />
  </div>
  <div>
    <input v-model="countNumber" placeholder="Count Number" type="number" />
  </div>
  <div>
    <input v-model="leaderName" placeholder="Leader Name" />
  </div>
</template>

<style scoped lang="scss"></style>
