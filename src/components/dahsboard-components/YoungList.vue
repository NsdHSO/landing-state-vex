<script setup
        lang="ts">

import DataTable from "@/components/table/DataTable.vue";
import {useYoungList} from "@/stores/youngList";

/**
 * Retrieves and manages the young participant list.
 *
 * @returns {Object} youngStore - The young participant store object.
 */
const youngStore = useYoungList()


/**
 * Handles the click event on a row in the table.
 *
 * @param {Event} event - The click event object.
 */
const changeCount = (event)=>
    youngStore.modifiedCountNumber(event.group, 20)
</script>

<template>
    <div class="young-list-container">
        <DataTable :data-source="youngStore.young"
                   :show-cells="['group', 'count', 'leader']"
                    @press-on-the-row="changeCount($event)"
        />
    </div>
</template>

<style scoped
       lang="scss">
.young-list-container {
  padding-top: .7rem;
}
</style>
