<script setup>
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/base/BaseButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="quality-section section">
    <div class="container">
      <div class="quality-grid">
        <!-- Content -->
        <div class="quality-content">
          <span class="quality-subtitle">HSE</span>
          <h2 class="quality-title">{{ t('home.quality.title') }}</h2>
          <p class="quality-description">{{ t('home.quality.description') }}</p>
          
          <div class="quality-badges">
            <div class="quality-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>ISO 9001:2015</span>
            </div>
            <div class="quality-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>ISO 14001:2015</span>
            </div>
          </div>

          <div class="quality-buttons">
            <BaseButton variant="primary">
              {{ t('home.quality.policy') }}
            </BaseButton>
            <BaseButton variant="outline">
              {{ t('home.quality.certificate') }}
            </BaseButton>
          </div>
        </div>

        <!-- Image -->
        <div class="quality-image">
          <img 
            src="/images/about/demarche-qualite.webp" 
            alt="Démarche qualité"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quality-section {
  background-color: var(--color-bg);
}

.quality-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.quality-subtitle {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
}

.quality-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: var(--spacing-lg);
}

.quality-description {
  font-size: 1rem;
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.quality-badges {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.quality-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.quality-badge svg {
  color: var(--color-secondary);
}

.quality-badge span {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-black);
}

.quality-buttons {
  display: flex;
  gap: var(--spacing-md);
}

.quality-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 1024px) {
  .quality-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .quality-image {
    order: -1;
  }
}

@media (max-width: 768px) {
  .quality-badges {
    flex-direction: column;
  }
  
  .quality-buttons {
    flex-direction: column;
  }
}
</style>
