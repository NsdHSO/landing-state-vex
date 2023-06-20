<script setup lang="ts">
import { useRoute } from 'vue-router'
import GroupView from '@/views/GroupView.vue'

const route = useRoute()
</script>

<template>
  <div v-if="route.params.id > 0">
    <GroupView />
  </div>
  <div v-else>new</div>
</template>

<style scoped lang="scss"></style>
