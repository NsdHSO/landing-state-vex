<script setup lang="ts">
import { useRoute } from 'vue-router'
import GroupView from '@/views/GroupView.vue'

const route = useRoute()
</script>

<template>
  <GroupView class="group-slot" />
</template>

<style scoped lang="scss">
.group-slot {
  padding: 1rem;
}
</style>
