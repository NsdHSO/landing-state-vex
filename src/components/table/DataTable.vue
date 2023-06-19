<script setup lang="ts">
interface DataTable {
  dataSource: any
  zebra?: boolean
  showCells: string[]
}

defineProps<DataTable>()
</script>

<template>
  <table>
    <tr>
      <th v-for="(header, keyHeader) of Object.keys(dataSource[0])" :key="keyHeader">
        {{ header.slice(0, 1).toUpperCase() + header.slice(1) }}
      </th>
    </tr>
    <tr
      v-for="(rows, keyRow) of dataSource"
      :key="keyRow"
      @click="$emit('pressOnTheRow', rows)"
      class="row-content"
    >
      <td v-for="(showCell, keyCell) of showCells" :key="keyCell">
        {{ rows[showCell] }}
      </td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
table {
  width: 100%;
  box-shadow: var(--shadow-table);
  border: none;

  tr {
    th {
      background: var(--color-zebra-header);
      font-weight: bold;
      transition: all 0.5s;
    }

    td {
      transition: all 0.3s;
      background: var(--vt-table-dark-zebra-data-cell);
      text-align: center;
      font-weight: 700;

      &:hover {
        opacity: 0.9;
      }
    }

    &.row-content {
      &:hover {
        opacity: 0.9;

        td {
          color: var(--color-text-table-hover);
        }
      }
    }
  }
}
</style>
