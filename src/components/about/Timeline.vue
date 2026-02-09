<script setup>
import { useAppStore } from '@/stores/app'
import { timeline } from '@/data/about'

const appStore = useAppStore()
</script>

<template>
  <div class="timeline">
    <div 
      v-for="(item, index) in timeline" 
      :key="item.year"
      :class="['timeline__item', { 'timeline__item--right': index % 2 !== 0 }]"
    >
      <div class="timeline__content">
        <span class="timeline__year">{{ item.year }}</span>
        <h3 class="timeline__title">{{ item[`title_${appStore.locale}`] }}</h3>
        <p class="timeline__description">{{ item[`description_${appStore.locale}`] }}</p>
      </div>
      <div class="timeline__dot"></div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-xl) 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 2px;
}

.timeline__item {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 30px);
  margin-bottom: var(--spacing-2xl);
}

.timeline__item--right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 30px);
}

.timeline__content {
  background-color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  max-width: 350px;
  text-align: right;
}

.timeline__item--right .timeline__content {
  text-align: left;
}

.timeline__year {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-secondary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-sm);
}

.timeline__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--spacing-sm);
}

.timeline__description {
  font-size: 0.9375rem;
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: 0;
}

.timeline__dot {
  position: absolute;
  top: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: var(--color-secondary);
  border: 4px solid var(--color-white);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline__item,
  .timeline__item--right {
    padding-left: 60px;
    padding-right: 0;
    justify-content: flex-start;
  }
  
  .timeline__content,
  .timeline__item--right .timeline__content {
    text-align: left;
    max-width: 100%;
  }
  
  .timeline__dot {
    left: 20px;
  }
}
</style>
