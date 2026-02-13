<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'

const { t } = useI18n()
const appStore = useAppStore()

const offices = [
  {
    id: 1,
    image: '/images/offices/reception-moderne.jpg',
    title_fr: 'Réception Moderne',
    title_en: 'Modern Reception',
    description_fr: 'Notre réception moderne avec bureau élégant et espace d\'accueil professionnel, conçue pour offrir un accueil chaleureux à nos clients et partenaires.',
    description_en: 'Our modern reception with elegant desk and professional welcome area, designed to provide a warm welcome to our clients and partners.'
  },
  {
    id: 2,
    image: '/images/offices/espace-travail.png',
    title_fr: 'Espace de Travail Moderne',
    title_en: 'Modern Work Space',
    description_fr: 'Un espace de travail moderne et fonctionnel, optimisé pour la productivité et le confort de nos équipes.',
    description_en: 'A modern and functional work space, optimized for productivity and comfort of our teams.'
  }
]
</script>

<template>
  <section class="offices-section section">
    <div class="container">
      <div class="offices-header">
        <span class="offices-subtitle">{{ t('home.offices.subtitle') || 'NOS LOCAUX' }}</span>
        <h2 class="offices-title">{{ t('home.offices.title') || 'Découvrez Nos Installations' }}</h2>
        <p class="offices-description">
          {{ t('home.offices.description') || 'Des locaux modernes et professionnels pour vous accueillir dans les meilleures conditions.' }}
        </p>
      </div>

      <div class="offices-grid">
        <div 
          v-for="office in offices" 
          :key="office.id"
          class="office-card"
        >
          <div class="office-image">
            <img 
              :src="office.image" 
              :alt="office.title_fr"
              loading="lazy"
            />
            <div class="office-overlay">
              <h3>{{ office[`title_${appStore.locale}`] || office.title_fr }}</h3>
            </div>
          </div>
          <div class="office-content">
            <p>{{ office[`description_${appStore.locale}`] || office.description_fr }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.offices-section {
  background-color: var(--color-white);
  animation: fadeIn 0.8s ease-out;
}

.offices-header {
  animation: fadeInUp 0.6s ease-out;
}

.offices-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-3xl);
}

.offices-subtitle {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
}

.offices-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: var(--spacing-lg);
}

.offices-description {
  font-size: 1.125rem;
  color: var(--color-gray);
  line-height: 1.7;
}

.offices-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.office-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  background-color: var(--color-white);
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.office-card:nth-child(1) {
  animation-delay: 0.2s;
}

.office-card:nth-child(2) {
  animation-delay: 0.4s;
}

.office-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.office-image {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.office-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.office-card:hover .office-image img {
  transform: scale(1.05);
}

.office-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(30, 58, 138, 0.95), transparent);
  padding: var(--spacing-xl);
  color: var(--color-white);
  transform: translateY(20px);
  transition: transform var(--transition-base);
  opacity: 0.9;
}

.office-card:hover .office-overlay {
  transform: translateY(0);
  opacity: 1;
}

.office-overlay h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.office-content {
  padding: var(--spacing-xl);
}

.office-content p {
  font-size: 1rem;
  color: var(--color-gray);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .offices-header {
    margin: 0 auto var(--spacing-2xl);
  }
  
  .offices-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
  
  .offices-description {
    font-size: 1rem;
  }

  .offices-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .office-image {
    height: 220px;
  }
  
  .office-overlay {
    transform: translateY(0);
    opacity: 1;
    padding: var(--spacing-lg);
  }
  
  .office-overlay h3 {
    font-size: 1.125rem;
  }
  
  .office-content {
    padding: var(--spacing-lg);
  }
  
  .office-content p {
    font-size: 0.9375rem;
  }
}
</style>
