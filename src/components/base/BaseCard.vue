<script setup>
import { computed } from 'vue'

const props = defineProps({
  hover: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const classes = computed(() => {
  return [
    'base-card',
    `base-card--padding-${props.padding}`,
    { 'base-card--hover': props.hover }
  ]
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  overflow: hidden;
}

/* Padding */
.base-card--padding-sm {
  padding: var(--spacing-md);
}

.base-card--padding-md {
  padding: var(--spacing-lg);
}

.base-card--padding-lg {
  padding: var(--spacing-xl);
}

/* Hover */
.base-card--hover:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}
</style>
