<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
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
  }
})
</script>

<template>
  <section 
    class="page-header" 
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="page-header__overlay"></div>
    <div class="page-header__content container">
      <nav class="page-header__breadcrumb" aria-label="Breadcrumb">
        <router-link to="/">{{ t('common.home') }}</router-link>
        <span class="separator">•</span>
        <span>{{ breadcrumb || title }}</span>
      </nav>
      <h1 class="page-header__title">{{ title }}</h1>
      <p v-if="subtitle" class="page-header__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 80px; /* Space for fixed header */
}

.page-header__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(30, 58, 138, 0.75),
    rgba(30, 58, 138, 0.85)
  );
}

.page-header__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-white);
  padding: var(--spacing-2xl) 0;
}

.page-header__content .page-header__breadcrumb {
  text-align: left;
}

.page-header__breadcrumb {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-xl);
  font-size: 0.875rem;
  text-align: left;
  padding-top: var(--spacing-md);
}

.page-header__breadcrumb a {
  color: var(--color-white);
  opacity: 0.8;
  transition: opacity var(--transition-fast);
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

.page-header__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-white);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.page-header__subtitle {
  font-size: 1.125rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .page-header {
    min-height: 250px;
  }
  
  .page-header__content {
    padding: var(--spacing-2xl) 0;
  }
}
</style>
