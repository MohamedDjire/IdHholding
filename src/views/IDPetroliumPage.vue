<script setup>
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/base/PageHeader.vue'

const { t } = useI18n()

const services = [
  { key: 'groupe.idPetrolium.service1', icon: 'fuel' },
  { key: 'groupe.idPetrolium.service2', icon: 'station' },
  { key: 'groupe.idPetrolium.service3', icon: 'oil' },
  { key: 'groupe.idPetrolium.service4', icon: 'services' }
]

const galleryImages = [
  { src: '/images/groupe/station-service-1.jpg', alt: 'Station-service moderne' },
  { src: '/images/groupe/station-service-2.jpg', alt: 'Vue aerienne station-service' },
  { src: '/images/groupe/station-service-3.jpg', alt: 'Pompes a carburant' }
]
</script>

<template>
  <main>
    <PageHeader 
      :title="t('groupe.idPetrolium.pageTitle')"
      :subtitle="t('groupe.idPetrolium.pageSubtitle')"
      :breadcrumb="t('groupe.idPetrolium.pageTitle')"
      background-image="/images/groupe/id-petrolium-hero.jpg"
      badge="ID Holding Group"
    />

    <!-- Mission & Vision -->
    <section class="petrolium-mission section">
      <div class="container">
        <div class="mission-grid">
          <!-- Mission -->
          <div class="mission-card mission-card--mission">
            <div class="mission-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h2 class="mission-card__title">{{ t('groupe.idPetrolium.mission') }}</h2>
            <p class="mission-card__text">{{ t('groupe.idPetrolium.missionText') }}</p>
          </div>

          <!-- Vision -->
          <div class="mission-card mission-card--vision">
            <div class="mission-card__icon mission-card__icon--secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h2 class="mission-card__title">{{ t('groupe.idPetrolium.vision') }}</h2>
            <p class="mission-card__text">{{ t('groupe.idPetrolium.visionText') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="petrolium-services section">
      <div class="container">
        <h2 class="section-title">{{ t('groupe.idPetrolium.services') }}</h2>
        <div class="section-title-line"></div>
        <div class="services-grid">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            class="service-item"
          >
            <div class="service-item__number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="service-item__content">
              <div class="service-item__icon">
                <!-- Fuel icon -->
                <svg v-if="service.icon === 'fuel'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 22h12V2H3z"></path>
                  <path d="M15 22V7l4-2v17"></path>
                  <path d="M19 22h2"></path>
                  <path d="M3 22H1"></path>
                </svg>
                <!-- Station icon -->
                <svg v-else-if="service.icon === 'station'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <circle cx="12" cy="14" r="4"></circle>
                  <line x1="12" y1="6" x2="12" y2="6"></line>
                </svg>
                <!-- Oil icon -->
                <svg v-else-if="service.icon === 'oil'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
                <!-- Services icon -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <p class="service-item__text">{{ t(service.key) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="petrolium-gallery section">
      <div class="container">
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="index" 
            class="gallery-item"
            :class="{ 'gallery-item--large': index === 0 }"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              loading="lazy"
            />
            <div class="gallery-item__overlay">
              <span class="gallery-item__caption">{{ image.alt }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Status Section -->
    <section class="petrolium-status section">
      <div class="container">
        <div class="status-card">
          <div class="status-card__indicator">
            <span class="status-card__pulse"></span>
            <span class="status-card__pulse-ring"></span>
          </div>
          <div class="status-card__content">
            <h2 class="status-card__title">{{ t('groupe.idPetrolium.status') }}</h2>
            <p class="status-card__text">{{ t('groupe.idPetrolium.statusText') }}</p>
          </div>
          <router-link to="/groupe" class="status-card__back">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {{ t('groupe.idPetrolium.backToGroupe') }}
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Mission & Vision */
.petrolium-mission {
  background: linear-gradient(135deg, var(--color-bg) 0%, rgba(30, 58, 138, 0.03) 100%);
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  max-width: 1000px;
  margin: 0 auto;
}

.mission-card {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out;
}

.mission-card--vision {
  animation-delay: 0.15s;
}

.mission-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-primary);
}

.mission-card--vision::before {
  background: var(--color-secondary);
}

.mission-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(30, 58, 138, 0.1);
  border-radius: var(--radius-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.mission-card__icon--secondary {
  background: rgba(249, 115, 22, 0.1);
  color: var(--color-secondary);
}

.mission-card__title {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-black);
}

.mission-card__text {
  font-size: 0.9375rem;
  color: var(--color-gray-dark);
  line-height: 1.8;
}

/* Services */
.petrolium-services {
  background: var(--color-white);
}

.section-title-line {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  margin: var(--spacing-md) auto var(--spacing-2xl);
  border-radius: 2px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  animation: fadeInUp 0.6s ease-out;
}

.service-item:nth-child(1) { animation-delay: 0.1s; }
.service-item:nth-child(2) { animation-delay: 0.2s; }
.service-item:nth-child(3) { animation-delay: 0.3s; }
.service-item:nth-child(4) { animation-delay: 0.4s; }

.service-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  background: var(--color-white);
  border: 1px solid rgba(249, 115, 22, 0.2);
}

.service-item__number {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: rgba(249, 115, 22, 0.15);
  line-height: 1;
  flex-shrink: 0;
}

.service-item__content {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1;
}

.service-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
  border-radius: var(--radius-md);
  color: var(--color-white);
  flex-shrink: 0;
}

.service-item__text {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-black);
  line-height: 1.5;
}

/* Gallery */
.petrolium-gallery {
  background: var(--color-bg);
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out;
}

.gallery-item--large {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item--large img {
  height: 350px;
}

.gallery-item:not(.gallery-item--large) img {
  height: 250px;
}

.gallery-item__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-lg);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity var(--transition-base);
}

.gallery-item:hover .gallery-item__overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item__caption {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-white);
}

/* Status Section */
.petrolium-status {
  background: var(--color-white);
}

.status-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(30, 58, 138, 0.05) 100%);
  border: 2px solid rgba(249, 115, 22, 0.2);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  max-width: 900px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.status-card__indicator {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.status-card__pulse {
  width: 16px;
  height: 16px;
  background: var(--color-secondary);
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.status-card__pulse-ring {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  animation: statusRing 2s ease-out infinite;
}

@keyframes statusRing {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

.status-card__content {
  flex: 1;
}

.status-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--color-black);
}

.status-card__text {
  font-size: 0.9375rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
}

.status-card__back {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  white-space: nowrap;
  flex-shrink: 0;
}

.status-card__back:hover {
  background: var(--color-secondary);
  color: var(--color-white);
  transform: translateX(-4px);
}

/* Responsive */
@media (max-width: 768px) {
  .mission-grid {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item--large {
    grid-column: span 1;
  }

  .gallery-item--large img,
  .gallery-item:not(.gallery-item--large) img {
    height: 200px;
  }

  .status-card {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-xl);
  }

  .status-card__back {
    width: 100%;
    justify-content: center;
  }
}
</style>
