<script setup lang="ts">
export interface DataTable<T> {
  dataSource: T
  showCells: string[]
  zebra?: boolean
  actionRow?: {
    show: boolean
    title: string
    icons: {
      iconName: string[]
      actionPress: string
      className?: string
    }[]
  }
  pressOnTheCell: string
}

defineProps<DataTable<any>>()
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
    <tr v-for="(row, keyRow) of dataSource" :key="keyRow" class="row-content">
      <td
        v-for="(showCell, keyCell) of showCells"
        :key="keyCell"
        @dblclick="$emit(actionRow?.icons[keyCell].actionPress, row)"
        @click="$emit(pressOnTheCell, $event)"
      >
        <div v-if="row.editable">
          {{ row[showCell].dataCell }}
        </div>
      </td>
      <td v-if="actionRow?.show" class="row-content-action">
        <div
          v-for="item in actionRow.icons"
          @click="$emit(item.actionPress, row)"
          :key="item.uid"
        >
          <vex-icon
            :icon="item.iconName"
            class="fa-2xl row-content-action__icon"
            :class="item.className"
          />
        </div>
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

        &__45 {
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>
