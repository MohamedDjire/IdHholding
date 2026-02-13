<script setup>
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/base/BaseButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="about-section section">
    <div class="container">
      <div class="about-grid">
        <!-- Image -->
        <div class="about-image">
          <div class="about-image__frame">
            <img 
              src="/images/about/notre-metier.png" 
              alt="Notre métier"
              loading="lazy"
            />
            <div class="about-badge">
              <span class="about-badge__number">2025</span>
              <span class="about-badge__text">{{ t('home.about.badge') }}</span>
            </div>
          </div>
          <div class="about-image__arrows" aria-hidden="true">
            <span class="about-arrow about-arrow--orange"></span>
            <span class="about-arrow about-arrow--primary"></span>
          </div>
        </div>

        <!-- Content -->
        <div class="about-content">
          <span class="about-tag">{{ t('nav.about') }}</span>
          <h2 class="about-title">{{ t('home.about.title') }}</h2>
          <p class="about-description">{{ t('home.about.description') }}</p>
          
          <ul class="about-list">
            <li><span class="about-list__bullet"></span>Transport de produits miniers</li>
            <li><span class="about-list__bullet"></span>Transport de conteneurs</li>
            <li><span class="about-list__bullet"></span>Transport de carburant</li>
          </ul>

          <BaseButton to="/a-propos" show-arrow>
            {{ t('home.about.cta') }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-bg) 100%);
  position: relative;
  animation: fadeIn 0.8s ease-out;
}

.about-image {
  position: relative;
  animation: slideInLeft 0.8s ease-out;
}

.about-content {
  padding-left: var(--spacing-xl);
  animation: slideInRight 0.8s ease-out;
}

.about-tag {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-white);
  background: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-md);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.about-image__frame {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.about-image__frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 3px solid rgba(249, 115, 22, 0.2);
  border-radius: var(--radius-xl);
  pointer-events: none;
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-slow);
}

.about-image:hover img {
  transform: scale(1.04);
}

.about-image__arrows {
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.about-arrow {
  width: 8px;
  height: 24px;
  border-radius: 4px;
  opacity: 0.6;
}

.about-arrow--orange {
  background: var(--color-secondary);
  animation: arrowFloat 2.5s ease-in-out infinite;
}

.about-arrow--primary {
  background: var(--color-primary);
  animation: arrowFloat 2.5s ease-in-out 0.3s infinite;
}

@keyframes arrowFloat {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-6px); opacity: 1; }
}

.about-badge {
  position: absolute;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-fast);
}

.about-badge:hover {
  transform: scale(1.05);
}

.about-badge__number {
  display: block;
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.about-badge__text {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.about-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-family: var(--font-heading);
}

.about-description {
  font-size: 1rem;
  color: var(--color-gray-dark);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.about-list {
  list-style: none;
  margin-bottom: var(--spacing-xl);
}

.about-list li {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: 1rem;
  color: var(--color-black);
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
}

.about-list__bullet {
  width: 10px;
  height: 10px;
  min-width: 10px;
  background: var(--color-secondary);
  border-radius: 2px;
  transition: transform var(--transition-fast);
}

.about-list li:hover .about-list__bullet {
  transform: scale(1.2);
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .about-image__arrows {
    display: none;
  }
  
  .about-content {
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .about-grid {
    gap: var(--spacing-xl);
  }
  
  .about-badge {
    bottom: var(--spacing-md);
    right: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .about-badge__number {
    font-size: 1.5rem;
  }
  
  .about-badge__text {
    font-size: 0.625rem;
  }
  
  .about-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
  
  .about-description {
    font-size: 0.9375rem;
    line-height: 1.7;
  }
  
  .about-list li {
    font-size: 0.9375rem;
  }
}
</style>
