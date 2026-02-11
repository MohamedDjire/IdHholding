<script setup>
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import RotatingText from '@/components/base/RotatingText.vue'
import TypewriterText from '@/components/base/TypewriterText.vue'

const { t } = useI18n()
const appStore = useAppStore()

const props = defineProps({
  service: {
    type: Object,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

// Mots rotatifs pour le transport de carburant
const rotatingWords = ['fiables', 'ponctuelles', 'sécurisées', 'efficaces', 'professionnelles']
</script>

<template>
  <div :id="service.slug" :class="['service-detail', { 'service-detail--reverse': reverse }]">
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
        v-if="service.id === 3 && appStore.locale === 'fr'"
      >
        <p>Notre vocation est de proposer à nos clients des solutions de transport d'hydrocarbures <RotatingText :words="rotatingWords" :interval="3000" />.</p>
        <p>Le transport de carburant nécessite une expertise particulière et des équipements conformes aux normes internationales. ID Holding dispose d'une flotte de citernes certifiées ADR.</p>
        <p>Nos chauffeurs sont spécialement formés à la manipulation de produits dangereux et respectent des protocoles de sécurité rigoureux à chaque étape du transport.</p>
      </div>
      <div 
        class="service-detail__description" 
        v-else
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
  animation: fadeIn 0.8s ease-out;
  animation-fill-mode: both;
}

.service-detail:nth-child(1) { animation-delay: 0.1s; }
.service-detail:nth-child(2) { animation-delay: 0.2s; }
.service-detail:nth-child(3) { animation-delay: 0.3s; }

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
  transition: transform var(--transition-base);
}

.service-detail__image:hover {
  transform: scale(1.02);
}

.service-detail__image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-slow);
}

.service-detail__image:hover img {
  transform: scale(1.05);
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
  transition: transform var(--transition-base);
}

.service-detail:hover .service-detail__icon {
  transform: scale(1.1) rotate(5deg);
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
