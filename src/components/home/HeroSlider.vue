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

    <!-- Content (always visible above slides) -->
    <div class="hero-slider__content container">
      <Transition name="fade-up" mode="out-in">
        <div :key="currentSlide">
          <span class="hero-slider__subtitle">{{ getLocalizedField('subtitle') }}</span>
          <h1 class="hero-slider__title">{{ getLocalizedField('title') }}</h1>
          <p class="hero-slider__description">{{ getLocalizedField('description') }}</p>
          <BaseButton :to="currentSlideData.link" size="lg">
            {{ getLocalizedField('cta') }}
          </BaseButton>
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

.hero-slider__subtitle {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
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
