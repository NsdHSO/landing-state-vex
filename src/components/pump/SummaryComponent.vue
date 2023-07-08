<script setup lang="ts">
defineProps({
  dollarRef: Number,
  littersRef: Number,
  priceRef: Number
})
</script>

<template>
  <div class="generic-invoice">
    <div class="generic-invoice__price">
      <div>
        <span> Price: </span>
        <span class="generic-invoice__price-money">
          {{ dollarRef }}
        </span>
      </div>
      <div class="generic-invoice__price-label">
        <span>Dollars</span>
      </div>
    </div>
    <div class="generic-invoice__price">
      <div>
        <span> Litters: </span>
        <span class="generic-invoice__price-money">
          {{ littersRef }}
        </span>
      </div>
      <div class="generic-invoice__price-label">
        <span>Litter</span>
      </div>
    </div>
    <div class="generic-invoice__price liter">
      <div>
        <span> Price per liter: </span>
        <span class="generic-invoice__price-money">
          {{ priceRef }}
        </span>
      </div>
      <div class="generic-invoice__price-label">
        <span>Litter</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.generic-invoice {
  &__price {
    display: flex;
    gap: 1rem;
    font-size: 1rem;

    &-money {
      font-family: digital;
      font-size: 2rem;
    }

    &-label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.liter {
  border: 4px solid var(--color-border);
  border-radius: 1rem;
  padding: 0 1rem;
  transition: all 0.5s;
  gap: 0.2rem;

  &:hover {
    opacity: 0.9;
    background: var(--color-border-hover);
  }
}
</style>
