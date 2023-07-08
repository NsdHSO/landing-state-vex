<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import SherifIcon from '@/assets/icons/SherifIcon.vue'
import PumpIcon from '@/assets/icons/PumpIcon.vue'
import KeyCalc from '@/components/pump/KeyCalc.vue'
import DialogComponent from '@/components/dialog/DialogComponent.vue'
import GenericDialogComponent from '@/components/dialog/GenericDialogComponent.vue'
import ShowValueComponent from '@/components/pump/ShowValueComponent.vue'
import SummaryComponent from '@/components/pump/SummaryComponent.vue'

const dollarRef = ref(0)
const littersRef = ref(0)
const presetRef = ref(0)
const increaseIntervalRef = ref(0)
const openRef = ref(false)

const disabledPressed = ref(true)
const pumpMetaData = reactive([
  {
    class: 'red-three',
    name: 'Red',
    fuel: 1,
    price: 1.2,
    valueModel: 0,
    label: 'Fuel 1'
  },
  {
    class: 'blue-two',
    name: 'Blue',
    fuel: 2,
    price: 3.1,
    valueModel: 0,
    label: 'Fuel 2'
  },
  {
    class: 'green-one',
    name: 'Green',
    fuel: 0,
    price: 2.4,
    valueModel: 0,
    label: 'Fuel 3'
  }
]) as {
  valueModel: number
  label: string
  class: string
  name: string
  fuel: number
  price: number
}[]
const whoIsChange = computed(() =>
  pumpMetaData ? pumpMetaData.find((s) => s.valueModel > 0) : 0
)

/**
 * Handles key press event.
 * @param {Object} $event - The event object.
 * @param {string} $event.item - The key item pressed.
 */
function keyPressed($event) {
  if ($event.item !== 'Clear') {
    presetRef.value = +(presetRef.value + '' + $event.item)
    dollarRef.value = 0
    littersRef.value = 0
  } else {
    presetRef.value = 0
  }
}

/**
 * Adds fuel continuously at every delay step.
 * @param {number} steps - The number of steps.
 * @param {number} currentFuel - The current fuel value.
 * @param {number} increment - The increment value.
 * @param {Fuel} fuel - The fuel object.
 * @param {number} delay - The delay in milliseconds.
 * @param {number} idx - The index of the fuel object in the pumpMetaData array.
 */
function addContAtEveryDelayStep(
  steps: number,
  currentFuel: number,
  increment: number,
  fuel,
  delay: number,
  idx
) {
  for (let i = 0; i <= steps; i++) {
    setTimeout(() => {
      currentFuel += increment
      pumpMetaData[idx].valueModel = +currentFuel.toFixed(3)
    }, i * delay)
  }
}

/**
 * Puts fuel in the car.
 * @param {Fuel} fuel - The fuel object.
 * @param {number} idx - The index of the fuel object in the pumpMetaData array.
 */
function putInCar(fuel, idx) {
  const increment = fuel.price / 100
  const duration = 300 // Duration in milliseconds
  const steps = 100 // Number of steps for the progress bar
  const delay = duration / steps
  let currentFuel = 0
  dollarRef.value = 0
  littersRef.value = 0

  pumpMetaData.forEach((fuel) =>
    fuel.valueModel > 0 ? (fuel.valueModel = 0) : fuel.valueModel
  )
  addContAtEveryDelayStep(steps, currentFuel, increment, fuel, delay, idx)
  increaseLitter(delay)
  watch(dollarRef, (newValueDollar) => {
    littersRef.value = +(newValueDollar / fuel.price).toFixed(3)
  })
}

/**
 * Increases the value of the litter.
 * @param {number} delay - The delay in milliseconds.
 */
function increaseLitter(delay) {
  increaseIntervalRef.value = setInterval(() => {
    dollarRef.value++
  }, delay)
}

/**
 * Clears the interval for increasing the litter.
 */
function clearIntervalIncrease() {
  clearInterval(increaseIntervalRef.value)
  openRef.value = true
}

/**
 * Handles the close dialog action.
 * @param {string} event - The event string.
 */
function closeDialogAction(event) {
  if (event === 'closeModal') {
    openRef.value = false
    dollarRef.value = 0
    littersRef.value = 0
    pumpMetaData.forEach((fuel) =>
      fuel.valueModel > 0 ? (fuel.valueModel = 0) : fuel.valueModel
    )
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
            :model="presetRef"
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
        <ShowValueComponent :model="littersRef" label="Liters" />
      </div>
      <div class="pump-display">
        <div
          class="pump__bottom__fuel"
          v-for="(item, idx) in pumpMetaData"
          :key="idx"
        >
          <div class="pump__bottom__fuel-price">
            <ShowValueComponent :model="item.valueModel" :label="item.label" />
          </div>
          <div class="pump__bottom__fuel-pump">
            <div
              @mousedown="putInCar(item, idx)"
              @mouseup="clearIntervalIncrease()"
            >
              <div :class="item.class">
                <PumpIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DialogComponent :open-dialog="openRef" where-project="body">
    <GenericDialogComponent
      title="You have to pay"
      @generic-msg="closeDialogAction($event)"
      :close-button="true"
    >
      <SummaryComponent
        :dollar-ref="dollarRef"
        :litters-ref="littersRef"
        :price-ref="whoIsChange.price"
      />
    </GenericDialogComponent>
  </DialogComponent>
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

.pump-display {
  display: flex;
  gap: 1rem;
}
</style>
