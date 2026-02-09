<script setup>
import { useI18n } from 'vue-i18n'
import { partners } from '@/data/partners'

const { t } = useI18n()
</script>

<template>
  <section class="partners-section section">
    <div class="container">
      <h2 class="section-title">{{ t('home.partners.title') }}</h2>
      <p class="section-subtitle">{{ t('home.partners.subtitle') }}</p>

      <div class="partners-grid">
        <a 
          v-for="partner in partners" 
          :key="partner.id"
          :href="partner.url"
          class="partner-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="partner.logo" :alt="partner.name" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  background-color: var(--color-white);
}

.partners-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3xl);
  flex-wrap: wrap;
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  transition: all var(--transition-fast);
}

.partner-logo img {
  max-width: 150px;
  max-height: 80px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all var(--transition-fast);
}

.partner-logo:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

@media (max-width: 768px) {
  .partners-grid {
    gap: var(--spacing-xl);
  }
  
  .partner-logo img {
    max-width: 120px;
    max-height: 60px;
  }
}
</style>
