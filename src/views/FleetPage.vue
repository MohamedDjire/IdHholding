<script setup>
import { useI18n } from 'vue-i18n'
import { vehicles, totalVehicles } from '@/data/vehicles'
import PageHeader from '@/components/base/PageHeader.vue'
import VehicleCard from '@/components/fleet/VehicleCard.vue'

const { t } = useI18n()

// Partner testimonials - What our partners say
const characteristics = [
  {
    icon: 'truck',
    title_fr: 'Partenariat de confiance',
    title_en: 'Trusted partnership',
    description_fr: '"ID Holding International a su répondre à nos besoins de transport avec professionnalisme et efficacité. Leur équipe est réactive et leurs services de qualité." - Partenaire minier',
    description_en: '"ID Holding International has been able to meet our transport needs with professionalism and efficiency. Their team is responsive and their services are of quality." - Mining Partner'
  },
  {
    icon: 'wrench',
    title_fr: 'Service fiable',
    title_en: 'Reliable service',
    description_fr: '"Nous apprécions la fiabilité et la ponctualité d\'ID Holding. Leurs véhicules sont bien entretenus et leurs chauffeurs professionnels." - Client logistique',
    description_en: '"We appreciate the reliability and punctuality of ID Holding. Their vehicles are well maintained and their drivers are professional." - Logistics Client'
  },
  {
    icon: 'target',
    title_fr: 'Excellence opérationnelle',
    title_en: 'Operational excellence',
    description_fr: '"Grâce à ID Holding, nous avons pu optimiser notre chaîne logistique. Leur suivi GPS nous permet de suivre nos expéditions en temps réel." - Entreprise exportatrice',
    description_en: '"Thanks to ID Holding, we have been able to optimize our logistics chain. Their GPS tracking allows us to follow our shipments in real time." - Export Company'
  },
  {
    icon: 'shield',
    title_fr: 'Sécurité garantie',
    title_en: 'Guaranteed safety',
    description_fr: '"La sécurité de nos marchandises est une priorité pour ID Holding. Nous leur faisons confiance pour le transport de nos produits les plus sensibles." - Partenaire industriel',
    description_en: '"The safety of our goods is a priority for ID Holding. We trust them for the transport of our most sensitive products." - Industrial Partner'
  }
]
</script>

<template>
  <main>
    <PageHeader 
      :title="t('fleet.pageTitle')"
      :subtitle="t('fleet.pageSubtitle')"
      :breadcrumb="t('fleet.breadcrumb')"
      background-image="/images/vehicles/citernes.jpg"
    />

    <!-- Introduction -->
    <section class="section">
      <div class="container">
        <p class="intro-text">{{ t('fleet.intro') }}</p>
        
        <!-- Total Vehicles -->
        <div class="total-vehicles">
          <span class="total-vehicles__number">{{ totalVehicles }}</span>
          <span class="total-vehicles__label">{{ t('fleet.total') }}</span>
        </div>
      </div>
    </section>

    <!-- Vehicles Grid -->
    <section class="section bg-gray">
      <div class="container">
        <div class="vehicles-grid">
          <VehicleCard 
            v-for="vehicle in vehicles" 
            :key="vehicle.id"
            :vehicle="vehicle"
          />
        </div>
      </div>
    </section>

    <!-- Characteristics -->
    <section class="section bg-gray">
      <div class="container">
        <div class="characteristics-header">
          <h2 class="section-title">{{ t('fleet.characteristics.title') }}</h2>
          <p class="section-subtitle">{{ t('fleet.characteristics.subtitle') }}</p>
        </div>
        
          <div class="characteristics-grid">
          <div 
            v-for="(item, index) in characteristics" 
            :key="index"
            class="characteristic-card"
          >
            <div class="characteristic-icon" :class="`characteristic-icon--${item.icon}`">
              <!-- Large flotte - Truck -->
              <svg v-if="item.icon === 'truck'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <!-- Entretien - Wrench -->
              <svg v-else-if="item.icon === 'wrench'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <!-- Ponctualité - Target -->
              <svg v-else-if="item.icon === 'target'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
              </svg>
              <!-- Sécurité - Shield -->
              <svg v-else-if="item.icon === 'shield'" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div class="characteristic-content">
              <h3 class="characteristic-title">
                {{ item[`title_${$i18n.locale.value}`] || item.title_fr }}
              </h3>
              <p class="characteristic-description">
                {{ item[`description_${$i18n.locale.value}`] || item.description_fr }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.intro-text {
  font-size: 1.125rem;
  color: var(--color-gray);
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-2xl);
}

.total-vehicles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  max-width: 300px;
  margin: 0 auto;
}

.total-vehicles__number {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  color: var(--color-secondary);
}

.total-vehicles__label {
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.vehicles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.characteristics-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-gray);
  margin-top: var(--spacing-md);
}

.characteristics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  max-width: 1000px;
  margin: 0 auto;
}

.characteristic-card {
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  min-height: 350px;
  overflow: visible;
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.characteristic-card:nth-child(1) { animation-delay: 0.1s; }
.characteristic-card:nth-child(2) { animation-delay: 0.2s; }
.characteristic-card:nth-child(3) { animation-delay: 0.3s; }
.characteristic-card:nth-child(4) { animation-delay: 0.4s; }

.characteristic-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-secondary);
}

.characteristic-card:hover .characteristic-icon {
  transform: scale(1.1) rotate(5deg);
}

.characteristic-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto var(--spacing-xl);
  background: linear-gradient(135deg, #6b21a8 0%, var(--color-secondary) 100%);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-base);
}

.characteristic-icon svg {
  width: 48px;
  height: 48px;
  color: var(--color-white);
  stroke-width: 2.5;
}

.characteristic-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  position: relative;
}

.characteristic-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-heading);
  display: block;
  width: 100%;
  visibility: visible;
  opacity: 1;
}

.characteristic-description {
  font-size: 1.0625rem;
  color: var(--color-black);
  line-height: 1.8;
  margin: 0;
  font-weight: 400;
  display: block;
  width: 100%;
  flex-grow: 1;
  visibility: visible;
  opacity: 1;
}

@media (max-width: 1024px) {
  .vehicles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .vehicles-grid {
    grid-template-columns: 1fr;
  }
  
  .total-vehicles__number {
    font-size: 3rem;
  }
  
  .characteristics-grid {
    grid-template-columns: 1fr;
  }
  
  .characteristic-card {
    padding: var(--spacing-lg);
  }
}
</style>
