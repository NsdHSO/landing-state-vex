<script setup lang="ts">
interface DataTable {
  dataSource: any
  showCells: string[]
  zebra?: boolean
  actionRow?: {
    show: boolean
    title: string
    iconName: string[]
  }
}

defineProps<DataTable>()
</script>

<template>
  <table>
    <tr>
      <th v-for="(header, keyHeader) of showCells" :key="keyHeader">
        {{ header.slice(0, 1).toUpperCase() + header.slice(1) }}
      </th>
      <th v-if="actionRow?.show">
        {{ actionRow.title }}
      </th>
    </tr>
    <tr v-for="(rows, keyRow) of dataSource" :key="keyRow" class="row-content">
      <td
        v-for="(showCell, keyCell) of showCells"
        :key="keyCell"
        @click="$emit('pressOnTheRow', rows)"
      >
        {{ rows[showCell] }}
      </td>
      <td
        v-if="actionRow?.show"
        class="row-content-action"
        @click="$emit('pressOnTheAction', rows)"
      >
        <vex-icon :icon="actionRow.iconName" class="fa-2xl row-content-action__icon" />
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

      .row-content-action {
        &__icon {
          color: var(--color-danger);
        }
      }
    }
  }
}
</style>
