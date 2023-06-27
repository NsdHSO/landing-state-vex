<script setup lang="ts">
import DataTable from '@/components/table/DataTable.vue'
import { useYoungList, Young } from '@/stores/youngList'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import DialogComponent from '@/components/dialog/DialogComponent.vue'
import GenericDialogComponent from '@/components/dialog/GenericDialogComponent.vue'

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
      id: event.group.dataCell
    },
    query: { component }
  })
}
const open = ref(false)
const UID_ENTRY = ref('')
const removeAction = (event) => {
  if (event) {
    youngStore.deleteOneYoung(UID_ENTRY.value)
  }
  open.value = false
}
const setUid = (event: Young) => {
  UID_ENTRY.value = event.uid.dataCell
  open.value = true
}

const editCell = ($event) => {
  youngStore.setARowLikeEdit($event.idx, $event.cell)
}
</script>

<template>
  <div class="young-list-container" v-if="youngStore.young.length">
    <DataTable
      :data-source="youngStore.young"
      :show-cells="['group', 'count', 'leader']"
      :action-row="{
        show: true,
        title: 'Action',
        icons: [
          {
            iconName: ['fas', 'plus'],
            actionPress: 'pressOnTheAction',
            className: 'row-content-action__45'
          }
        ]
      }"
      :press-on-the-cell="'cellEvent'"
      @cell-event="editCell($event)"
      @press-on-the-row="changeCount($event, 'LayoutComponent')"
      @press-on-the-action="setUid($event)"
    />
  </div>
  <div v-else>Loading</div>

  <DialogComponent :open-dialog="open" where-project="body">
    <GenericDialogComponent
      title="Are you sure"
      @generic-msg="removeAction($event)"
    />
  </DialogComponent>
</template>

<style scoped lang="scss">
.young-list-container {
  padding-top: 0.7rem;
}
</style>
