<script setup>
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const appStore = useAppStore()

defineProps({
  service: {
    type: Object,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['service-detail', { 'service-detail--reverse': reverse }]">
    <div class="service-detail__image">
      <img :src="service.image" :alt="service[`title_${appStore.locale}`]" />
    </div>
    <div class="service-detail__content">
      <div 
        class="service-detail__icon" 
        :style="{ backgroundColor: service.color }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      </div>
      <h2 class="service-detail__title">{{ service[`title_${appStore.locale}`] }}</h2>
      <div 
        class="service-detail__description" 
        v-html="service[`description_${appStore.locale}`]"
      ></div>
      
      <div class="service-detail__features">
        <h4>{{ t('services.features') }}</h4>
        <ul>
          <li 
            v-for="(feature, index) in service[`features_${appStore.locale}`]" 
            :key="index"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  padding: var(--spacing-xl) 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.service-detail:last-child {
  border-bottom: none;
}

.service-detail--reverse {
  direction: rtl;
}

.service-detail--reverse > * {
  direction: ltr;
}

.service-detail__image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.service-detail__image img {
  width: 100%;
  height: auto;
  display: block;
}

.service-detail__content {
  padding: var(--spacing-lg);
}

.service-detail__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
  color: var(--color-white);
}

.service-detail__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: var(--spacing-lg);
}

.service-detail__description {
  font-size: 1rem;
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.service-detail__description :deep(p) {
  margin-bottom: var(--spacing-md);
}

.service-detail__features h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--spacing-md);
}

.service-detail__features ul {
  list-style: none;
}

.service-detail__features li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  font-size: 0.9375rem;
  color: var(--color-black);
  margin-bottom: var(--spacing-sm);
}

.service-detail__features li svg {
  color: var(--color-secondary);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 1024px) {
  .service-detail,
  .service-detail--reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }
  
  .service-detail__content {
    padding: var(--spacing-lg) 0;
  }
}
</style>
