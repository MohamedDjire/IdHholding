<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { RouterLink } from 'vue-router'
import { services } from '@/data/services'
import BaseCard from '@/components/base/BaseCard.vue'

const appStore = useAppStore()
const { t } = useI18n()

// Icon components
const icons = {
  mountain: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
  container: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
  fuel: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h12"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>`
}
</script>

<template>
  <section id="services" class="services-section section">
    <div class="services-section__bg" aria-hidden="true"></div>
    <div class="container">
      <span class="section-label">{{ t('nav.services') }}</span>
      <h2 class="section-title">{{ t('home.services.title') }}</h2>
      <p class="section-subtitle">{{ t('home.services.subtitle') }}</p>

      <div class="services-grid">
        <BaseCard 
          v-for="(service, index) in services" 
          :key="service.id"
          :class="['service-card', `service-card--${index + 1}`]"
        >
          <div class="service-card__image-wrap">
            <img 
              :src="service.image" 
              :alt="service[`title_${appStore.locale}`]"
              class="service-card__image"
              loading="lazy"
            />
            <div 
              class="service-card__icon-overlay"
              :style="{ backgroundColor: service.color }"
            >
              <span v-html="icons[service.icon]"></span>
            </div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">
              {{ service[`title_${appStore.locale}`] }}
            </h3>
            <p class="service-card__description">
              {{ service[`shortDescription_${appStore.locale}`] }}
            </p>
            <RouterLink :to="`/activites#${service.slug}`" class="service-card__link">
              {{ t('home.services.learnMore') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </RouterLink>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: linear-gradient(180deg, var(--color-bg) 0%, rgba(30, 58, 138, 0.02) 100%);
  position: relative;
  overflow: hidden;
}

.services-section__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%231e3a8a' stroke-opacity='0.03' stroke-width='0.5'/%3E%3C/svg%3E");
  pointer-events: none;
}

.services-section .container {
  position: relative;
  z-index: 1;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.service-card {
  padding: 0 !important;
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  animation: fadeInUp 0.7s ease-out;
  animation-fill-mode: both;
}

.service-card--1 { animation-delay: 0.1s; }
.service-card--2 { animation-delay: 0.2s; }
.service-card--3 { animation-delay: 0.3s; }

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(30, 58, 138, 0.15);
}

.service-card__image-wrap {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.service-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.service-card:hover .service-card__image {
  transform: scale(1.08);
}

.service-card__icon-overlay {
  position: absolute;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-base);
}

.service-card__icon-overlay span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card:hover .service-card__icon-overlay {
  transform: scale(1.1);
}

.service-card__body {
  padding: var(--spacing-xl);
  text-align: left;
}

.service-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
  font-family: var(--font-heading);
}

.service-card__description {
  font-size: 0.9375rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.section-label {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--spacing-sm);
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast), gap var(--transition-fast);
}

.service-card__link:hover {
  color: var(--color-secondary);
  gap: 0.5rem;
}

.service-card__link svg {
  flex-shrink: 0;
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
  
  .service-card__body {
    padding: var(--spacing-lg);
  }
}
</style>
