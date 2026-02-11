<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: '/images/slider/slide-1.jpg'
  },
  breadcrumb: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  }
})

const badgeText = computed(() => props.badge || t('header.badge'))
</script>

<template>
  <section 
    class="page-header" 
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="page-header__overlay">
      <div class="page-header__shimmer" aria-hidden="true"></div>
      <div class="page-header__glow page-header__glow--1" aria-hidden="true"></div>
      <div class="page-header__glow page-header__glow--2" aria-hidden="true"></div>
      <!-- Lignes lumineuses (style SADA) -->
      <div class="page-header__lines" aria-hidden="true">
        <span class="page-header__line page-header__line--1"></span>
        <span class="page-header__line page-header__line--2"></span>
        <span class="page-header__line page-header__line--3"></span>
        <span class="page-header__line page-header__line--4"></span>
        <span class="page-header__line page-header__line--5"></span>
        <span class="page-header__line page-header__line--6"></span>
      </div>
      <!-- Badge en haut (ex. "Leader du transport industriel") -->
      <div class="page-header__badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <span>{{ badgeText }}</span>
      </div>
      <!-- Icônes flottantes décoratives -->
      <div class="page-header__float-icon page-header__float-icon--tr">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
      </div>
      <div class="page-header__float-icon page-header__float-icon--bl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>
      </div>
    </div>
    <div class="page-header__content container">
      <nav class="page-header__breadcrumb" aria-label="Breadcrumb">
        <router-link to="/">{{ t('common.home') }}</router-link>
        <span class="separator">•</span>
        <span>{{ breadcrumb || title }}</span>
      </nav>
      <h1 class="page-header__title">{{ title }}</h1>
      <div class="page-header__title-line"></div>
      <p v-if="subtitle" class="page-header__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 80px;
  overflow: hidden;
}

.page-header__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(30, 58, 138, 0.82) 0%,
    rgba(30, 58, 138, 0.78) 50%,
    rgba(23, 46, 110, 0.88) 100%
  );
}

/* Shimmer animé */
.page-header__shimmer {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(249, 115, 22, 0.06) 45%,
    rgba(249, 115, 22, 0.12) 50%,
    transparent 55%
  );
  animation: headerShimmer 8s ease-in-out infinite;
}

@keyframes headerShimmer {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-5%, -5%) rotate(1deg); }
}

/* Lueurs douces */
.page-header__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
  animation: headerGlow 6s ease-in-out infinite;
}

.page-header__glow--1 {
  width: 300px;
  height: 300px;
  background: var(--color-secondary);
  top: -100px;
  right: 10%;
}

.page-header__glow--2 {
  width: 200px;
  height: 200px;
  background: var(--color-primary-light);
  bottom: -50px;
  left: 15%;
  animation-delay: 2s;
}

@keyframes headerGlow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(1.1); }
}

/* Lignes lumineuses (rayons) */
.page-header__lines {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  height: 140%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.page-header__line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 50%;
  background: linear-gradient(to bottom, transparent, rgba(249, 115, 22, 0.15), transparent);
  transform-origin: center top;
  animation: headerLinePulse 4s ease-in-out infinite;
}

.page-header__line--1 { transform: translate(-50%, -100%) rotate(0deg); }
.page-header__line--2 { transform: translate(-50%, -100%) rotate(60deg); animation-delay: 0.3s; }
.page-header__line--3 { transform: translate(-50%, -100%) rotate(120deg); animation-delay: 0.6s; }
.page-header__line--4 { transform: translate(-50%, -100%) rotate(180deg); animation-delay: 0.2s; }
.page-header__line--5 { transform: translate(-50%, -100%) rotate(240deg); animation-delay: 0.5s; }
.page-header__line--6 { transform: translate(-50%, -100%) rotate(300deg); animation-delay: 0.4s; }

@keyframes headerLinePulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.9; }
}

/* Badge en haut (autres pages) */
.page-header__badge {
  position: absolute;
  top: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--color-secondary);
  border-radius: var(--radius-full);
  color: var(--color-white);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  z-index: 2;
  animation: headerBadgeIn 0.8s ease-out, headerFloat 5s ease-in-out 1s infinite;
}

.page-header__badge svg {
  color: var(--color-secondary);
  flex-shrink: 0;
}

@keyframes headerBadgeIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-15px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes headerFloat {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-4px); }
}

/* Icônes flottantes décoratives */
.page-header__float-icon {
  position: absolute;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(249, 115, 22, 0.6);
  border-radius: var(--radius-md);
  color: rgba(255, 255, 255, 0.85);
  z-index: 2;
  animation: headerIconFloat 4s ease-in-out infinite;
}

.page-header__float-icon svg {
  width: 24px;
  height: 24px;
}

.page-header__float-icon--tr {
  top: 20%;
  right: 8%;
  animation-delay: 0.5s;
}

.page-header__float-icon--bl {
  bottom: 25%;
  left: 6%;
  animation-delay: 1s;
}

@keyframes headerIconFloat {
  0%, 100% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(-8px); opacity: 1; }
}

.page-header__content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--color-white);
  padding: var(--spacing-2xl) 0;
}

.page-header__breadcrumb {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
  font-size: 0.875rem;
  text-align: left;
  padding-top: var(--spacing-md);
  animation: headerFadeInUp 0.6s ease-out;
}

.page-header__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  animation: headerFadeInUp 0.7s ease-out 0.15s both;
}

.page-header__title-line {
  width: 0;
  height: 3px;
  margin: 0 auto var(--spacing-md);
  background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
  border-radius: 2px;
  animation: headerLineExpand 0.8s ease-out 0.4s forwards;
}

@keyframes headerLineExpand {
  to { width: 120px; }
}

.page-header__subtitle {
  font-size: 1.125rem;
  opacity: 0;
  max-width: 600px;
  margin: 0 auto;
  animation: headerFadeInUp 0.6s ease-out 0.5s forwards;
}

@keyframes headerFadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-header__breadcrumb a {
  color: var(--color-white);
  opacity: 0.85;
  transition: opacity var(--transition-fast), color var(--transition-fast);
}

.page-header__breadcrumb a:hover {
  opacity: 1;
  color: var(--color-secondary);
}

.page-header__breadcrumb .separator {
  opacity: 0.7;
  margin: 0 var(--spacing-xs);
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-header {
    min-height: 280px;
  }
  
  .page-header__content {
    padding: var(--spacing-2xl) 0;
  }
  
  .page-header__glow {
    display: none;
  }
}
</style>
