<script setup lang="ts">
import ShowValueComponent from './ShowValueComponent.vue'
import { ref } from 'vue'
import SherifIcon from '@/assets/icons/SherifIcon.vue'
import PumpIcon from '@/assets/icons/PumpIcon.vue'
import KeyCalc from '@/components/pump/KeyCalc.vue'

const dollarRef = ref('')
const litters = ref('')
const preset = ref('')
const fuel1 = ref('')
const fuel2 = ref('')
const fuel4 = ref('')

const pumpMetaData = [
  {
    class: 'green-one',
    name: 'Green'
  },
  {
    class: 'blue-two',
    name: 'Blue'
  },
  {
    class: 'red-three',
    name: 'Red'
  }
]
</script>

<template>
  <div class="pump">
    <div class="pump__top">
      <div class="pump__top-preset">
        <div>
          <SherifIcon />
          <ShowValueComponent :model="preset" label="Preset" />
        </div>
        <div>
          <KeyCalc />
        </div>
      </div>
    </div>
    <div class="pump__bottom">
      <div class="pump__bottom-coins">
        <ShowValueComponent :model="dollarRef" label="Dollar" />
        <ShowValueComponent :model="litters" label="Liters" />
      </div>
      <div class="pump__bottom__fuel">
        <div class="pump__bottom__fuel-price">
          <ShowValueComponent :model="fuel1" label="Fuel1" />
          <ShowValueComponent :model="fuel2" label="Fuel2" />
          <ShowValueComponent :model="fuel4" label="Fuel3" />
        </div>
        <div class="pump__bottom__fuel-pump">
          <div v-for="(item, idx) in pumpMetaData" :key="idx">
            <div :class="item.class">
              <PumpIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pump {
  padding: 1rem;
  display: flex;

  &__top {
    div {
      width: max-content;
    }

    &-preset {
      svg {
        fill: var(--color-hover);
      }
    }

    display: flex;
  }

  font-family: digital;

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &-coins {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;

      > div {
        :deep {
          input {
            width: 20rem;
          }
        }

        display: flex;
        gap: 1rem;
      }
    }

    &__fuel {
      display: flex;
      gap: 2rem;
      flex-direction: column;

      &-price,
      &-pump {
        display: flex;
      }

      &-price {
        gap: 1rem;
      }

      &-pump {
        justify-content: space-between;

        svg {
          width: 7rem;
          height: 7rem;
          transition: all 0.4s;

          &:active {
            transform: rotate(55deg);

            :deep(g) {
              :nth-child(2) {
                fill: red;
              }
            }
          }
        }

        .green-one {
          fill: var(--color-pump-one);
        }

        .blue-two {
          fill: var(--color-pump-two);
        }

        .red-three {
          fill: var(--color-pump-three);
        }
      }
    }
  }
}
</style>
