<script setup
        lang="ts">
import YoungList
    from "@/components/dahsboard-components/YoungList.vue";
</script>

<template>
    <div class="container-dashboard">
        <div class="container-dashboard-first-row">
            <div
                    class="container-dashboard-first-row__division">
                <YoungList/>
            </div>
            <div class="container-dashboard-first-row__division">
                TESD
            </div>
        </div>
        <div class="container-dashboard-second-row">
            <div
                    class="container-dashboard-second-row__division">
                sdddds
            </div>
            <div
                    class="container-dashboard-second-row__division">
                dasd
            </div>
        </div>
    </div>
</template>
<style lang="scss"
       scoped>
.container-dashboard {
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;

  &-first-row, &-second-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    height: 50%;

    &__division {
      width: 50%;
    }

  }
}
</style>