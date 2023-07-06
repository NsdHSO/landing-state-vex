<script setup lang="ts">
import ShowValueComponent from './ShowValueComponent.vue'
import { reactive, ref } from 'vue'
import SherifIcon from '@/assets/icons/SherifIcon.vue'
import PumpIcon from '@/assets/icons/PumpIcon.vue'
import KeyCalc from '@/components/pump/KeyCalc.vue'

const dollarRef = ref('')
const litters = ref('')
const preset = ref('')
const fuels = reactive([
  {
    valueModel: 0,
    label: 'Fuel 1',
    fuel: 1
  },
  {
    valueModel: 0,
    label: 'Fuel 2',
    fuel: 2
  },
  {
    valueModel: 0,
    label: 'Fuel 3',
    fuel: 3
  }
])
const disabledPressed = ref(true)
const pumpMetaData = [
  {
    class: 'green-one',
    name: 'Green',
    fuel: 0,
    price: 3.2
  },
  {
    class: 'blue-two',
    name: 'Blue',
    fuel: 1,
    price: 2.2
  },
  {
    class: 'red-three',
    name: 'Red',
    fuel: 2,
    price: 1.2
  }
] as { class: string; name: string; fuel: number; price: number }[]

function keyPressed($event) {
  if ($event.item !== 'Clear') {
    preset.value = preset.value + $event.item + ''
  } else {
    preset.value = ''
  }
}

function putInCar(fuel) {
  const increment = fuel.price / 100
  const duration = 300 // Duration in milliseconds
  const steps = 100 // Number of steps for the progress bar
  const delay = duration / steps

  let currentFuel = 0

  for (let i = 0; i <= steps; i++) {
    setTimeout(() => {
      currentFuel += increment
      fuels[fuel.fuel].valueModel = +currentFuel.toFixed(3)
    }, i * delay)
  }
}
</script>

<template>
  <div class="pump">
    <div class="pump__top">
      <div class="pump__top-preset">
        <div>
          <SherifIcon />
          <ShowValueComponent
            :model="preset"
            label="Preset"
            :disabled-model="disabledPressed"
          />
        </div>
        <div>
          <KeyCalc @key-press="keyPressed($event)" />
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
          <ShowValueComponent
            v-for="(item, idx) in fuels"
            :model="item.valueModel"
            :label="item.label"
            :key="idx"
          />
        </div>
        <div class="pump__bottom__fuel-pump">
          <div
            v-for="(item, idx) in pumpMetaData"
            :key="idx"
            @mousedown="putInCar(item)"
          >
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
