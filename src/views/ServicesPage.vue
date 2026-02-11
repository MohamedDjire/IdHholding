<script setup>
import { useI18n } from 'vue-i18n'
import { services } from '@/data/services'
import PageHeader from '@/components/base/PageHeader.vue'
import ServiceDetail from '@/components/services/ServiceDetail.vue'
import TypewriterText from '@/components/base/TypewriterText.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <PageHeader 
      :title="t('services.pageTitle')"
      :subtitle="t('services.pageSubtitle')"
      :breadcrumb="t('services.breadcrumb')"
      background-image="/images/services/transport-minier.jpg"
    />

    <!-- Introduction -->
    <section class="intro-section section">
      <div class="container">
        <div class="intro-card">
          <div class="intro-card__content">
            <div class="intro-card__header-content">
              <div class="intro-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="intro-card__header-text">
                <h2 class="intro-card__title">Notre Expertise</h2>
                <p class="intro-card__subtitle">Des solutions de transport sur mesure</p>
              </div>
            </div>
            <div class="intro-text-wrapper">
              <TypewriterText :text="t('services.intro')" :speed="20" :delay="800" />
            </div>
            
            <div class="intro-highlights">
              <div class="highlight-item">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Solutions logistiques adaptées</span>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Suivi GPS en temps réel</span>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Équipes qualifiées et certifiées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Details -->
    <section class="section section--compact section-details">
      <div class="container">
        <span class="section-label">{{ t('services.features') }}</span>
        <ServiceDetail 
          v-for="(service, index) in services" 
          :key="service.id"
          :service="service"
          :reverse="index % 2 !== 0"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.section--compact {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}

.section-details .section-label {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--spacing-lg);
}

.section-details .container {
  animation: fadeInUp 0.6s ease-out;
}

.intro-section {
  background: linear-gradient(135deg, var(--color-bg) 0%, rgba(30, 58, 138, 0.03) 100%);
  padding: var(--spacing-3xl) 0;
}

.intro-card {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
  position: relative;
}

.intro-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%);
}

.intro-card__header-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 2px solid var(--color-bg);
}

.intro-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
  border-radius: var(--radius-lg);
  color: var(--color-white);
  flex-shrink: 0;
  animation: scale 0.6s ease-out;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
}

.intro-card__icon svg {
  width: 40px;
  height: 40px;
}

.intro-card__header-text {
  flex: 1;
}

.intro-card__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--color-black);
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.intro-card__subtitle {
  font-size: 1.125rem;
  color: var(--color-gray);
  font-weight: 400;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.intro-card__content {
  padding: var(--spacing-3xl);
}

.intro-text-wrapper {
  font-size: 1.0625rem;
  color: var(--color-gray-dark);
  line-height: 1.9;
  text-align: justify;
  margin-bottom: var(--spacing-2xl);
  padding: var(--spacing-xl);
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-secondary);
  position: relative;
  animation: fadeIn 1s ease-out 0.6s both;
}

.intro-text-wrapper::before {
  content: '"';
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  font-size: 4rem;
  font-family: Georgia, serif;
  color: var(--color-secondary);
  opacity: 0.2;
  line-height: 1;
}

.intro-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-bg);
  transition: all var(--transition-base);
  animation: fadeInUp 0.6s ease-out both;
}

.highlight-item:nth-child(1) { animation-delay: 0.8s; }
.highlight-item:nth-child(2) { animation-delay: 1s; }
.highlight-item:nth-child(3) { animation-delay: 1.2s; }

.highlight-item:hover {
  border-color: var(--color-secondary);
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  background: linear-gradient(135deg, var(--color-white) 0%, rgba(249, 115, 22, 0.05) 100%);
}

.highlight-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  border-radius: var(--radius-full);
  color: var(--color-white);
  flex-shrink: 0;
  transition: transform var(--transition-base);
}

.highlight-item:hover .highlight-icon {
  transform: scale(1.1) rotate(5deg);
}

.highlight-item span {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-black);
}

@media (max-width: 1024px) {
  .intro-highlights {
    grid-template-columns: 1fr;
  }
  
  .intro-card__content {
    padding: var(--spacing-2xl);
  }
}

@media (max-width: 768px) {
  .intro-section {
    padding: var(--spacing-2xl) 0;
  }
  
  .intro-card__header-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-lg);
  }
  
  .intro-card__content {
    padding: var(--spacing-xl);
  }
  
  .intro-text-wrapper {
    padding: var(--spacing-lg);
    text-align: left;
  }
  
  .intro-text-wrapper::before {
    font-size: 3rem;
  }
}
</style>
