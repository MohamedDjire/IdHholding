<script setup>
import { useI18n } from 'vue-i18n'
import { partners } from '@/data/partners'

const { t } = useI18n()
</script>

<template>
  <section class="partners-section section">
    <div class="container">
      <div class="partners-header">
        <span class="section-label">{{ t('home.partners.title') }}</span>
        <h2 class="section-title">{{ t('home.partners.subtitle') }}</h2>
      </div>

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
  animation: fadeIn 0.8s ease-out;
}

.partners-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
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

.partners-section .section-title {
  animation: fadeInUp 0.6s ease-out;
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
  transition: all var(--transition-base);
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.partner-logo:nth-child(1) { animation-delay: 0.1s; }
.partner-logo:nth-child(2) { animation-delay: 0.2s; }
.partner-logo:nth-child(3) { animation-delay: 0.3s; }
.partner-logo:nth-child(4) { animation-delay: 0.4s; }
.partner-logo:nth-child(5) { animation-delay: 0.5s; }
.partner-logo:nth-child(6) { animation-delay: 0.6s; }

.partner-logo:hover {
  transform: translateY(-5px) scale(1.1);
}

.partner-logo img {
  max-width: 150px;
  max-height: 80px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all var(--transition-base);
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
