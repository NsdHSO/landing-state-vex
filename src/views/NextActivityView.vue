<script setup lang="ts">
import TimelinePointComponent from '@/components/dahsboard-components/TimelinePointComponent.vue'
import { isReadonly, onMounted, ref } from 'vue'

const values = ref('')
onMounted(() => {
  console.log(isReadonly(values))
})
</script>

<template>
  <TimelinePointComponent />
</template>

<style scoped lang="scss"></style>
