<script setup lang="ts">
import DataTable from '@/components/table/DataTable.vue'
import { useYoungList } from '@/stores/youngList'
import {useRouter} from "vue-router";

/**
 * Retrieves and manages the young participant list.
 *
 * @returns {Object} youngStore - The young participant store object.
 */
const youngStore = useYoungList()
/**
 * Retrieves and manages the young participant list.
 *
 * @returns {Object} router - The router state
 * object.
 */
const router = useRouter()
/**
 * Handles the click event on a row in the table.
 *
 * @param {Event} event - The click event object.
 */
const changeCount = (event) => {
  router.push('/landing-state-vex/dashboard/edit')
}
</script>

<template>
  <div class="young-list-container">
    <DataTable
      :data-source="youngStore.young"
      :show-cells="['group', 'count', 'leader']"
      @press-on-the-row="changeCount($event)"
    />
  </div>
</template>

<style scoped lang="scss">
.young-list-container {
  padding-top: 0.7rem;
}
</style>
