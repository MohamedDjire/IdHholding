<script setup>
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/base/PageHeader.vue'

const { t } = useI18n()

const partners = [
  {
    id: 'sada',
    nameKey: 'groupe.sada.name',
    descriptionKey: 'groupe.sada.description',
    logo: null,
    type: 'external',
    url: 'https://SADAsarl.com',
    color: '#1e3a8a',
    icon: 'building'
  },
  {
    id: 'id-petrolium',
    nameKey: 'groupe.idPetrolium.name',
    descriptionKey: 'groupe.idPetrolium.description',
    logo: null,
    type: 'internal',
    route: '/groupe/id-petrolium',
    color: '#f97316',
    icon: 'fuel',
    comingSoon: true
  }
]
</script>

<template>
  <main>
    <PageHeader 
      :title="t('groupe.pageTitle')"
      :subtitle="t('groupe.pageSubtitle')"
      :breadcrumb="t('groupe.breadcrumb')"
      background-image="/images/slider/slide-2.jpg"
    />

    <!-- Introduction -->
    <section class="groupe-intro section">
      <div class="container">
        <div class="groupe-intro__card">
          <div class="groupe-intro__icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <div class="groupe-intro__text">
            <h2 class="groupe-intro__title">{{ t('groupe.partners') }}</h2>
            <p class="groupe-intro__description">{{ t('groupe.intro') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Grid -->
    <section class="groupe-partners section">
      <div class="container">
        <div class="partners-grid">
          <!-- SADA SARL Card -->
          <a 
            :href="partners[0].url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="partner-card partner-card--sada"
          >
            <div class="partner-card__header">
              <div class="partner-card__icon" style="background-color: #1e3a8a;">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12" y2="18"></line>
                  <line x1="8" y1="6" x2="16" y2="6"></line>
                  <line x1="8" y1="10" x2="16" y2="10"></line>
                  <line x1="8" y1="14" x2="12" y2="14"></line>
                </svg>
              </div>
              <div class="partner-card__badge partner-card__badge--active">
                <span class="partner-card__badge-dot"></span>
                {{ t('groupe.visitSite') }}
              </div>
            </div>
            <div class="partner-card__body">
              <h3 class="partner-card__name">{{ t('groupe.sada.name') }}</h3>
              <p class="partner-card__description">{{ t('groupe.sada.description') }}</p>
            </div>
            <div class="partner-card__footer">
              <span class="partner-card__cta">
                {{ t('groupe.visitSite') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <!-- ID Petrolium Card -->
          <router-link 
            to="/groupe/id-petrolium"
            class="partner-card partner-card--petrolium"
          >
            <div class="partner-card__header">
              <div class="partner-card__icon" style="background-color: #f97316;">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 22h12V2H3z"></path>
                  <path d="M15 22V7l4-2v17"></path>
                  <path d="M19 22h2"></path>
                  <path d="M3 22H1"></path>
                  <circle cx="9" cy="12" r="2"></circle>
                </svg>
              </div>
              <div class="partner-card__badge partner-card__badge--coming">
                <span class="partner-card__badge-dot partner-card__badge-dot--orange"></span>
                {{ t('groupe.comingSoon') }}
              </div>
            </div>
            <div class="partner-card__body">
              <h3 class="partner-card__name">{{ t('groupe.idPetrolium.name') }}</h3>
              <p class="partner-card__description">{{ t('groupe.idPetrolium.description') }}</p>
            </div>
            <div class="partner-card__image-preview">
              <img 
                src="/images/groupe/station-service-1.jpg" 
                alt="Station-service ID Petrolium"
                loading="lazy"
              />
            </div>
            <div class="partner-card__footer">
              <span class="partner-card__cta partner-card__cta--orange">
                {{ t('groupe.discover') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Introduction Section */
.groupe-intro {
  background: linear-gradient(135deg, var(--color-bg) 0%, rgba(30, 58, 138, 0.03) 100%);
}

.groupe-intro__card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xl);
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.groupe-intro__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.groupe-intro__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: var(--radius-lg);
  color: var(--color-white);
  flex-shrink: 0;
}

.groupe-intro__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-black);
}

.groupe-intro__description {
  font-size: 1rem;
  color: var(--color-gray-dark);
  line-height: 1.8;
}

/* Partners Grid */
.groupe-partners {
  padding-bottom: var(--spacing-3xl);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  max-width: 1000px;
  margin: 0 auto;
}

/* Partner Card */
.partner-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
  animation: fadeInUp 0.8s ease-out;
  border: 2px solid transparent;
}

.partner-card:nth-child(2) {
  animation-delay: 0.15s;
}

.partner-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.partner-card--sada:hover {
  border-color: var(--color-primary);
}

.partner-card--petrolium:hover {
  border-color: var(--color-secondary);
}

.partner-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-xl);
  padding-bottom: 0;
}

.partner-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: var(--radius-lg);
  color: var(--color-white);
  flex-shrink: 0;
}

.partner-card__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.partner-card__badge--active {
  background: rgba(30, 58, 138, 0.1);
  color: var(--color-primary);
}

.partner-card__badge--coming {
  background: rgba(249, 115, 22, 0.1);
  color: var(--color-secondary);
}

.partner-card__badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary);
  animation: pulse 2s ease-in-out infinite;
}

.partner-card__badge-dot--orange {
  background: var(--color-secondary);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.partner-card__body {
  padding: var(--spacing-xl);
  flex: 1;
}

.partner-card__name {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-black);
}

.partner-card__description {
  font-size: 0.9375rem;
  color: var(--color-gray);
  line-height: 1.7;
}

.partner-card__image-preview {
  padding: 0 var(--spacing-xl);
  margin-bottom: var(--spacing-md);
}

.partner-card__image-preview img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: var(--radius-md);
}

.partner-card__footer {
  padding: var(--spacing-lg) var(--spacing-xl);
  border-top: 1px solid var(--color-bg);
}

.partner-card__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-primary);
  transition: all var(--transition-fast);
}

.partner-card__cta--orange {
  color: var(--color-secondary);
}

.partner-card:hover .partner-card__cta {
  gap: var(--spacing-md);
}

/* Responsive */
@media (max-width: 768px) {
  .groupe-intro__card {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: var(--spacing-xl);
  }

  .partners-grid {
    grid-template-columns: 1fr;
  }
  
  .partner-card__image-preview img {
    height: 140px;
  }
}
</style>
