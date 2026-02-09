<script setup>
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/base/BaseButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="about-section section">
    <div class="container">
      <div class="about-grid">
        <!-- Image -->
        <div class="about-image">
          <img 
            src="/images/about/notre-metier.png" 
            alt="Notre métier"
            loading="lazy"
          />
          <div class="about-badge">
            <span class="about-badge__number">10+</span>
            <span class="about-badge__text">{{ t('home.about.badge') }}</span>
          </div>
        </div>

        <!-- Content -->
        <div class="about-content">
          <span class="about-subtitle">{{ t('home.about.subtitle') }}</span>
          <h2 class="about-title">{{ t('home.about.title') }}</h2>
          <p class="about-description">{{ t('home.about.description') }}</p>
          
          <ul class="about-list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Transport de produits miniers
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Transport de conteneurs
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Transport de carburant
            </li>
          </ul>

          <BaseButton to="/a-propos">
            {{ t('home.about.cta') }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--color-white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.about-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.about-badge__number {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.about-badge__text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.about-content {
  padding-left: var(--spacing-xl);
}

.about-subtitle {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
}

.about-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: var(--spacing-lg);
}

.about-description {
  font-size: 1rem;
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.about-list {
  list-style: none;
  margin-bottom: var(--spacing-xl);
}

.about-list li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1rem;
  color: var(--color-black);
  margin-bottom: var(--spacing-sm);
}

.about-list li svg {
  color: var(--color-secondary);
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .about-badge {
    bottom: -20px;
    right: 20px;
  }
  
  .about-content {
    padding-left: 0;
  }
}
</style>
