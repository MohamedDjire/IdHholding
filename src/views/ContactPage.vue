<script setup>
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/base/PageHeader.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <PageHeader 
      :title="t('contact.pageTitle')"
      :subtitle="t('contact.pageSubtitle')"
      :breadcrumb="t('contact.breadcrumb')"
      background-image="/images/offices/reception-moderne.jpg"
    />

    <section class="section contact-section">
      <div class="container">
        <span class="section-label">{{ t('contact.breadcrumb') }}</span>
        <div class="contact-grid">
          <!-- Contact Info -->
          <ContactInfo />

          <!-- Map Placeholder -->
          <div class="map-container">
            <h3>{{ t('contact.map.title') }}</h3>
            <div class="map-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <p>Carte Google Maps</p>
              <span>Zone Industrielle de Yopougon, Abidjan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.section-label {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--spacing-lg);
}

.contact-section .container {
  animation: fadeInUp 0.6s ease-out;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.map-container h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--spacing-lg);
}

.map-placeholder {
  background-color: var(--color-bg);
  border-radius: var(--radius-lg);
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  color: var(--color-gray);
  border: 2px dashed var(--color-gray-light);
}

.map-placeholder svg {
  color: var(--color-primary);
}

.map-placeholder p {
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0;
}

.map-placeholder span {
  font-size: 0.875rem;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
