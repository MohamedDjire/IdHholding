<script setup>
import { useAppStore } from '@/stores/app'
import { values } from '@/data/about'
import BaseCard from '@/components/base/BaseCard.vue'

const appStore = useAppStore()

const icons = {
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`
}
</script>

<template>
  <div class="values-grid">
    <BaseCard 
      v-for="value in values" 
      :key="value.id"
      class="value-card"
    >
      <div class="value-card__icon" v-html="icons[value.icon]"></div>
      <h3 class="value-card__title">{{ value[`title_${appStore.locale}`] }}</h3>
      <p class="value-card__description">{{ value[`description_${appStore.locale}`] }}</p>
    </BaseCard>
  </div>
</template>

<style scoped>
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
}

.value-card {
  text-align: center;
  padding: var(--spacing-xl);
}

.value-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: var(--color-bg);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-lg);
  color: var(--color-secondary);
}

.value-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--spacing-sm);
}

.value-card__description {
  font-size: 0.9375rem;
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
