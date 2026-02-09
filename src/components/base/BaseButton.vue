<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  return [
    'base-button',
    `base-button--${props.variant}`,
    `base-button--${props.size}`,
    { 'base-button--disabled': props.disabled }
  ]
})

const component = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const componentProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return { disabled: props.disabled }
})
</script>

<template>
  <component :is="component" :class="classes" v-bind="componentProps">
    <slot />
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;
}

/* Sizes */
.base-button--sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.base-button--md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.base-button--lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Variants */
.base-button--primary {
  background-color: var(--color-secondary);
  color: var(--color-white);
  border-color: var(--color-secondary);
}

.base-button--primary:hover {
  background-color: var(--color-secondary-dark);
  border-color: var(--color-secondary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.base-button--secondary {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.base-button--secondary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.base-button--outline {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.base-button--outline:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Disabled */
.base-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
