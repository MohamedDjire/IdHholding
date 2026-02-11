<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { slides } from '@/data/slides'
import BaseButton from '@/components/base/BaseButton.vue'

const appStore = useAppStore()
const currentSlide = ref(0)
let slideInterval = null

const currentSlideData = computed(() => slides[currentSlide.value])

const getLocalizedField = (field) => {
  return currentSlideData.value[`${field}_${appStore.locale}`]
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  // Réinitialiser le timer après changement manuel
  resetAutoSlide()
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  // Réinitialiser le timer après changement manuel
  resetAutoSlide()
}

function goToSlide(index) {
  currentSlide.value = index
  // Réinitialiser le timer après changement manuel
  resetAutoSlide()
}

function startAutoSlide() {
  // S'assurer qu'il n'y a pas d'intervalle en cours
  stopAutoSlide()
  // Démarrer le défilement automatique toutes les 5 secondes pour une transition plus discrète
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
}

function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

function resetAutoSlide() {
  // Réinitialiser le timer après une action manuelle
  stopAutoSlide()
  startAutoSlide()
}

onMounted(() => {
  // Démarrer le défilement automatique au chargement
  startAutoSlide()
})

onUnmounted(() => {
  // Nettoyer l'intervalle quand le composant est détruit
  stopAutoSlide()
})
</script>

<template>
  <section class="hero-slider">
    <!-- Slides -->
    <div class="hero-slider__slides-container">
      <div 
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="['hero-slider__slide', { 'hero-slider__slide--active': currentSlide === index }]"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="hero-slider__color-overlay" :class="`hero-slider__color-overlay--${index}`"></div>
        <div class="hero-slider__overlay"></div>
      </div>
    </div>

    <!-- Décor style SADA : lignes, badge, icônes -->
    <div class="hero-slider__decor" aria-hidden="true">
      <div class="hero-slider__lines">
        <span class="hero-slider__line hero-slider__line--1"></span>
        <span class="hero-slider__line hero-slider__line--2"></span>
        <span class="hero-slider__line hero-slider__line--3"></span>
        <span class="hero-slider__line hero-slider__line--4"></span>
        <span class="hero-slider__line hero-slider__line--5"></span>
        <span class="hero-slider__line hero-slider__line--6"></span>
      </div>
      <div class="hero-slider__float-icon hero-slider__float-icon--tr">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
      </div>
      <div class="hero-slider__float-icon hero-slider__float-icon--bl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>
      </div>
    </div>

    <!-- Content (always visible above slides) -->
    <div class="hero-slider__content container">
      <Transition name="fade-up" mode="out-in">
        <div :key="currentSlide" class="hero-slider__content-inner">
          <div class="hero-slider__subtitle-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>{{ getLocalizedField('subtitle') }}</span>
          </div>
          <h1 class="hero-slider__title">{{ getLocalizedField('title') }}</h1>
          <p class="hero-slider__description">{{ getLocalizedField('description') }}</p>
          <div class="hero-slider__ctas">
            <BaseButton :to="currentSlideData.link" size="lg" show-arrow>
              {{ getLocalizedField('cta') }}
            </BaseButton>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Navigation Arrows -->
    <button 
      class="hero-slider__arrow hero-slider__arrow--prev" 
      @click="prevSlide" 
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button 
      class="hero-slider__arrow hero-slider__arrow--next" 
      @click="nextSlide" 
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>

    <!-- Dots Navigation -->
    <div 
      class="hero-slider__dots"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <button 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        :class="['hero-slider__dot', { 'hero-slider__dot--active': currentSlide === index }]"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.hero-slider {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  z-index: 1;
}

.hero-slider__slides-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slider__slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  z-index: 0;
}

.hero-slider__slide--active {
  opacity: 1;
  z-index: 1;
}

.hero-slider__color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  z-index: 1;
  animation: colorPulse 8s ease-in-out infinite;
}

.hero-slider__slide--active .hero-slider__color-overlay {
  opacity: 0.25;
}

.hero-slider__color-overlay--0 {
  background: linear-gradient(
    135deg,
    rgba(30, 58, 138, 0.4) 0%,
    rgba(37, 99, 235, 0.3) 50%,
    rgba(249, 115, 22, 0.2) 100%
  );
}

.hero-slider__color-overlay--1 {
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.4) 0%,
    rgba(30, 58, 138, 0.3) 50%,
    rgba(249, 115, 22, 0.2) 100%
  );
}

.hero-slider__color-overlay--2 {
  background: linear-gradient(
    135deg,
    rgba(249, 115, 22, 0.4) 0%,
    rgba(234, 88, 12, 0.3) 50%,
    rgba(30, 58, 138, 0.2) 100%
  );
}

@keyframes colorPulse {
  0%, 100% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.35;
  }
}

.hero-slider__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(30, 58, 138, 0.85) 0%,
    rgba(30, 58, 138, 0.7) 50%,
    rgba(30, 58, 138, 0.5) 100%
  );
  z-index: 2;
}

/* Décor style SADA */
.hero-slider__decor {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
}

.hero-slider__lines {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  height: 140%;
  transform: translate(-50%, -50%);
}

.hero-slider__line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 50%;
  background: linear-gradient(to bottom, transparent, rgba(249, 115, 22, 0.15), transparent);
  transform-origin: center top;
  animation: heroLinePulse 4s ease-in-out infinite;
}

.hero-slider__line--1 { transform: translate(-50%, -100%) rotate(0deg); }
.hero-slider__line--2 { transform: translate(-50%, -100%) rotate(60deg); animation-delay: 0.3s; }
.hero-slider__line--3 { transform: translate(-50%, -100%) rotate(120deg); animation-delay: 0.6s; }
.hero-slider__line--4 { transform: translate(-50%, -100%) rotate(180deg); animation-delay: 0.2s; }
.hero-slider__line--5 { transform: translate(-50%, -100%) rotate(240deg); animation-delay: 0.5s; }
.hero-slider__line--6 { transform: translate(-50%, -100%) rotate(300deg); animation-delay: 0.4s; }

@keyframes heroLinePulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.9; }
}

/* Sous-titre style badge (ex. "RAPIDITÉ ET EFFICACITÉ") */
.hero-slider__subtitle-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid var(--color-secondary);
  border-radius: var(--radius-full);
  color: var(--color-secondary);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  animation: heroSubtitleBadgeIn 0.8s ease-out, heroFloat 5s ease-in-out 1s infinite;
}

.hero-slider__subtitle-badge svg {
  color: var(--color-secondary);
  flex-shrink: 0;
}

@keyframes heroSubtitleBadgeIn {
  from { opacity: 0; transform: translateY(-15px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes heroFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.hero-slider__float-icon {
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
  animation: heroIconFloat 4s ease-in-out infinite;
}

.hero-slider__float-icon svg {
  width: 24px;
  height: 24px;
}

.hero-slider__float-icon--tr {
  top: 20%;
  right: 8%;
  animation-delay: 0.5s;
}

.hero-slider__float-icon--bl {
  bottom: 25%;
  left: 6%;
  animation-delay: 1s;
}

@keyframes heroIconFloat {
  0%, 100% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(-8px); opacity: 1; }
}

.hero-slider__content {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  padding: 0 var(--spacing-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  text-align: center;
}

.hero-slider__content > div {
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.hero-slider__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.hero-slider__description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

/* Navigation Arrows */
.hero-slider__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 11;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(100, 116, 139, 0.8);
  border: none;
  border-radius: var(--radius-full);
  color: var(--color-white);
  cursor: pointer;
  transition: all var(--transition-fast);
  backdrop-filter: blur(4px);
}

.hero-slider__arrow:hover {
  background-color: rgba(100, 116, 139, 1);
  transform: translateY(-50%) scale(1.05);
}

.hero-slider__arrow--prev {
  left: var(--spacing-xl);
}

.hero-slider__arrow--next {
  right: var(--spacing-xl);
}

/* Dots */
.hero-slider__dots {
  position: absolute;
  bottom: var(--spacing-2xl);
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  display: flex;
  gap: var(--spacing-sm);
}

.hero-slider__dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.hero-slider__dot:hover,
.hero-slider__dot--active {
  background-color: var(--color-secondary);
  transform: scale(1.2);
}

/* Content Transitions */
.fade-up-enter-active {
  transition: all 0.6s ease-out;
}

.fade-up-leave-active {
  transition: all 0.4s ease-in;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

@media (max-width: 768px) {
  .hero-slider {
    min-height: 500px;
  }

  .hero-slider__subtitle-badge {
    font-size: 0.7rem;
    padding: var(--spacing-xs) var(--spacing-md);
    letter-spacing: 0.08em;
  }

  .hero-slider__float-icon {
    width: 40px;
    height: 40px;
  }

  .hero-slider__float-icon svg {
    width: 20px;
    height: 20px;
  }

  .hero-slider__float-icon--tr {
    right: 4%;
  }

  .hero-slider__float-icon--bl {
    left: 4%;
  }
  
  .hero-slider__content {
    text-align: center;
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }
  
  .hero-slider__description {
    max-width: 100%;
  }
  
  .hero-slider__arrow {
    width: 40px;
    height: 40px;
  }
  
  .hero-slider__arrow--prev {
    left: var(--spacing-md);
  }
  
  .hero-slider__arrow--next {
    right: var(--spacing-md);
  }
}
</style>
