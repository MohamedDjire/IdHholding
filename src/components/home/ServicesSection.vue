<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { services } from '@/data/services'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const appStore = useAppStore()
const { t } = useI18n()

// Icon components
const icons = {
  mountain: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
  container: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
  fuel: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h12"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>`
}
</script>

<template>
  <section class="services-section section">
    <div class="container">
      <h2 class="section-title">{{ t('home.services.title') }}</h2>
      <p class="section-subtitle">{{ t('home.services.subtitle') }}</p>

      <div class="services-grid">
        <BaseCard 
          v-for="service in services" 
          :key="service.id"
          class="service-card"
        >
          <div 
            class="service-card__icon" 
            :style="{ backgroundColor: service.color }"
            v-html="icons[service.icon]"
          ></div>
          <h3 class="service-card__title">
            {{ service[`title_${appStore.locale}`] }}
          </h3>
          <p class="service-card__description">
            {{ service[`shortDescription_${appStore.locale}`] }}
          </p>
          <BaseButton to="/activites" variant="outline" size="sm">
            {{ t('home.services.learnMore') }}
          </BaseButton>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: var(--color-bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.service-card {
  text-align: center;
  padding: var(--spacing-xl);
}

.service-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
  color: var(--color-white);
}

.service-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--color-black);
}

.service-card__description {
  font-size: 0.9375rem;
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
