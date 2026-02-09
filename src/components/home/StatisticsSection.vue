<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { statistics, keyValues } from '@/data/statistics'

const { t } = useI18n()
const appStore = useAppStore()

const counters = ref(statistics.map(() => 0))
const hasAnimated = ref(false)

// Animate counters when in view
function animateCounters() {
  if (hasAnimated.value) return
  hasAnimated.value = true
  
  statistics.forEach((stat, index) => {
    const target = stat.value
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        counters.value[index] = target
        clearInterval(timer)
      } else {
        counters.value[index] = Math.floor(current)
      }
    }, 16)
  })
}

onMounted(() => {
  // Use Intersection Observer to trigger animation
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
      }
    },
    { threshold: 0.3 }
  )
  
  const section = document.querySelector('.statistics-section')
  if (section) observer.observe(section)
})

const valueIcons = {
  'shield-check': `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  'lock': `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  'clock': `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
}
</script>

<template>
  <section class="statistics-section">
    <div class="container">
      <!-- Key Values -->
      <div class="key-values">
        <div 
          v-for="value in keyValues" 
          :key="value.id"
          class="key-value"
        >
          <div class="key-value__icon" v-html="valueIcons[value.icon]"></div>
          <h3 class="key-value__title">{{ value[`title_${appStore.locale}`] }}</h3>
          <p class="key-value__description">{{ value[`description_${appStore.locale}`] }}</p>
        </div>
      </div>

      <h2 class="section-title text-white">{{ t('home.stats.title') }}</h2>
      <p class="section-subtitle text-white" style="opacity: 0.8;">{{ t('home.stats.subtitle') }}</p>

      <!-- Statistics Grid -->
      <div class="statistics-grid">
        <div 
          v-for="(stat, index) in statistics" 
          :key="stat.id"
          class="stat-card"
        >
          <span class="stat-card__value">{{ counters[index] }}{{ stat.suffix }}</span>
          <span class="stat-card__label">{{ stat[`label_${appStore.locale}`] }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.statistics-section {
  background-color: var(--color-primary);
  padding: var(--spacing-3xl) 0;
}

.key-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.key-value {
  text-align: center;
  color: var(--color-white);
}

.key-value__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-md);
  color: var(--color-secondary);
}

.key-value__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--color-white);
}

.key-value__description {
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.6;
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--spacing-lg);
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  transition: all var(--transition-fast);
}

.stat-card:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.stat-card__value {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.stat-card__label {
  font-size: 0.875rem;
  color: var(--color-white);
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .key-values {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .statistics-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .key-values {
    grid-template-columns: 1fr;
  }
  
  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-card__value {
    font-size: 2rem;
  }
}
</style>
