<script setup lang="ts">
import DataTable from '@/components/table/DataTable.vue'
import { useYoungList, Young } from '@/stores/youngList'
import { useRouter } from 'vue-router'

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
 * @param {String} component - Component What render
 */
const changeCount = (event: Young, component: string) => {
  router.push({
    name: 'editYoungList',
    params: {
      id: event.group
    },
    query: { component }
  })
}

const removeAction = (event) => {
  console.log(event)
}
</script>

<template>
  <div class="young-list-container">
    <DataTable
      :data-source="youngStore.young"
      :show-cells="['group', 'count', 'leader']"
      :action-row="{ show: true, title: 'Action', iconName: ['fas', 'plus'] }"
      @press-on-the-row="changeCount($event, 'LayoutComponent')"
      @press-on-the-action="removeAction($event)"
    />
  </div>
</template>

<style scoped lang="scss">
.young-list-container {
  padding-top: 0.7rem;
}
</style>
