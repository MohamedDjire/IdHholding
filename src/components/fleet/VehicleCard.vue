<script setup>
import { useAppStore } from '@/stores/app'
import BaseCard from '@/components/base/BaseCard.vue'

const appStore = useAppStore()

defineProps({
  vehicle: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <BaseCard class="vehicle-card">
    <div class="vehicle-card__image">
      <img :src="vehicle.image" :alt="vehicle[`type_${appStore.locale}`]" />
    </div>
    <div class="vehicle-card__content">
      <div class="vehicle-card__icon" :style="{ color: vehicle.color }">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      </div>
      <h3 class="vehicle-card__type">{{ vehicle[`type_${appStore.locale}`] }}</h3>
      <span class="vehicle-card__quantity" :style="{ color: vehicle.color }">{{ vehicle.quantity }}</span>
      <p class="vehicle-card__description">{{ vehicle[`description_${appStore.locale}`] }}</p>
    </div>
  </BaseCard>
</template>

<style scoped>
.vehicle-card {
  overflow: hidden;
  padding: 0;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.vehicle-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.vehicle-card__image {
  height: 180px;
  overflow: hidden;
}

.vehicle-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.vehicle-card:hover .vehicle-card__image img {
  transform: scale(1.05);
}

.vehicle-card__content {
  padding: var(--spacing-lg);
  text-align: center;
}

.vehicle-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-sm);
}

.vehicle-card__type {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--spacing-xs);
}

.vehicle-card__quantity {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.vehicle-card__description {
  font-size: 0.875rem;
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: 0;
}
</style>
