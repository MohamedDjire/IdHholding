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

const statIcons = {
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  truck: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  tanker: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22h12"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2"/></svg>',
  flatbed: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12"/><path d="M14 9h4l4 4v5"/><circle cx="18" cy="18" r="2"/><circle cx="6" cy="18" r="2"/></svg>',
  'dump-truck': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 17h4"/><path d="M4 17V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11"/><path d="M4 17H2"/><path d="M22 17h-2"/></svg>',
  loader: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"/><path d="m6.8 4-2.8 2.8"/><path d="M2 12h4"/><path d="m4 6.8-2.8 2.8"/><path d="M12 18v4"/><path d="m17.2 20 2.8-2.8"/><path d="M22 12h-4"/><path d="m20 17.2 2.8-2.8"/></svg>'
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

      <span class="section-label section-label--light">{{ t('home.stats.title') }}</span>
      <h2 class="section-title text-white">{{ t('home.stats.subtitle') }}</h2>

      <!-- Statistics Grid -->
      <div class="statistics-grid">
        <div 
          v-for="(stat, index) in statistics" 
          :key="stat.id"
          class="stat-card"
        >
          <div class="stat-card__icon" v-html="statIcons[stat.icon] || statIcons.truck"></div>
          <span class="stat-card__value">{{ counters[index] }}{{ stat.suffix }}</span>
          <span class="stat-card__label">{{ stat[`label_${appStore.locale}`] }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.statistics-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;
}

.statistics-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%),
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%);
  pointer-events: none;
}

.section-label--light {
  color: var(--color-secondary);
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
  transition: transform var(--transition-base);
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.key-value:nth-child(1) { animation-delay: 0.1s; }
.key-value:nth-child(2) { animation-delay: 0.2s; }
.key-value:nth-child(3) { animation-delay: 0.3s; }

.key-value:hover {
  transform: translateY(-5px);
}

.key-value__icon {
  transition: transform var(--transition-base);
}

.key-value:hover .key-value__icon {
  transform: scale(1.15) rotate(5deg);
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
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  text-align: center;
  transition: all var(--transition-base);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.stat-card:hover {
  background-color: rgba(255, 255, 255, 0.14);
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.stat-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin: 0 auto var(--spacing-md);
  color: var(--color-secondary);
}

.stat-card__icon :deep(svg) {
  width: 32px;
  height: 32px;
}

.stat-card__value {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.stat-card__label {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  white-space: nowrap;
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
  .statistics-section {
    padding: var(--spacing-2xl) 0;
  }

  .key-values {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
  }
  
  .key-value__icon {
    width: 64px;
    height: 64px;
  }
  
  .key-value__icon :deep(svg) {
    width: 32px;
    height: 32px;
  }
  
  .key-value__title {
    font-size: 1.125rem;
  }
  
  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
  
  .stat-card {
    padding: var(--spacing-lg) var(--spacing-md);
    border-radius: var(--radius-lg);
  }
  
  .stat-card__icon {
    width: 44px;
    height: 44px;
    margin: 0 auto var(--spacing-sm);
  }
  
  .stat-card__icon :deep(svg) {
    width: 24px;
    height: 24px;
  }
  
  .stat-card__value {
    font-size: 1.5rem;
    margin-bottom: 2px;
  }
  
  .stat-card__label {
    font-size: 0.6875rem;
    white-space: normal;
    line-height: 1.3;
  }
}

@media (max-width: 380px) {
  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
  
  .stat-card__value {
    font-size: 1.25rem;
  }
}
</style>
