<script setup>
defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <div :class="['spinner', `spinner--${size}`, `spinner--${color}`]">
    <div class="spinner__circle"></div>
  </div>
</template>

<style scoped>
.spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.spinner__circle {
  border-radius: 50%;
  border-style: solid;
  border-top-color: transparent;
  border-right-color: transparent;
  animation: spin 0.8s linear infinite;
}

/* Sizes */
.spinner--sm .spinner__circle {
  width: 1rem;
  height: 1rem;
  border-width: 2px;
}

.spinner--md .spinner__circle {
  width: 2rem;
  height: 2rem;
  border-width: 3px;
}

.spinner--lg .spinner__circle {
  width: 3rem;
  height: 3rem;
  border-width: 4px;
}

/* Colors */
.spinner--primary .spinner__circle {
  border-color: var(--color-primary);
  border-top-color: transparent;
  border-right-color: transparent;
}

.spinner--secondary .spinner__circle {
  border-color: var(--color-secondary);
  border-top-color: transparent;
  border-right-color: transparent;
}

.spinner--white .spinner__circle {
  border-color: var(--color-white);
  border-top-color: transparent;
  border-right-color: transparent;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
