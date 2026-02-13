<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const appStore = useAppStore()

const navLinks = [
  { path: '/', key: 'nav.home', subtitle: 'nav.homeSubtitle' },
  { path: '/a-propos', key: 'nav.about', subtitle: 'nav.aboutSubtitle' },
  { path: '/activites', key: 'nav.services', subtitle: 'nav.servicesSubtitle' },
  { path: '/parc-automobile', key: 'nav.fleet', subtitle: 'nav.fleetSubtitle' },
  { path: '/contacts', key: 'nav.contact', subtitle: 'nav.contactSubtitle' }
]

onMounted(() => {
  // Header always has blue background, no scroll effect needed
})
</script>

<template>
  <header class="header">
    <div class="header__container">
      <!-- Logo -->
      <router-link to="/" class="header__logo">
        <img 
          src="/images/logo/id-holding-logo.png" 
          alt="ID Holding International"
          class="header__logo-img"
        />
      </router-link>

      <!-- Navigation Desktop -->
      <nav class="header__nav hide-mobile">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="header__nav-link"
          :class="{ 'header__nav-link--active': $route.path === link.path }"
        >
          <span class="header__nav-link-main">{{ t(link.key) }}</span>
        </router-link>
      </nav>

      <!-- Dashboard Link (desktop only) -->
      <a 
        href="mailto:contact@idholding-international.com" 
        class="header__dashboard hide-mobile"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dashboard
      </a>

      <!-- Language Switcher (desktop only) -->
      <div class="header__lang hide-mobile">
        <LanguageSwitcher />
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        class="header__hamburger show-mobile"
        @click="appStore.toggleMobileMenu"
        aria-label="Ouvrir le menu"
      >
        <span class="header__hamburger-line"></span>
        <span class="header__hamburger-line"></span>
        <span class="header__hamburger-line"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background-color: var(--color-primary);
  height: 80px;
  overflow: hidden;
}

.header__container {
  display: flex;
  align-items: stretch;
  height: 100%;
  max-width: 100%;
  margin: 0;
  width: 100%;
}

/* Logo */
.header__logo {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
  text-decoration: none;
}

.header__logo-img {
  height: 70px;
  width: auto;
  object-fit: contain;
  display: block;
  max-width: 200px;
}

/* Navigation - Center */
.header__nav {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  height: 100%;
  gap: var(--spacing-lg);
}

.header__nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  text-decoration: none;
  height: 100%;
  position: relative;
  transition: all var(--transition-fast);
}

.header__nav-link-main {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.2;
  transition: color var(--transition-fast);
}

.header__nav-link--active .header__nav-link-main {
  color: var(--color-secondary);
}

.header__nav-link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--color-secondary);
}

.header__nav-link:hover .header__nav-link-main {
  color: var(--color-secondary);
}

/* Dashboard Link */
.header__dashboard {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--color-white);
  text-decoration: none;
  transition: all var(--transition-fast);
  background-color: rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.header__dashboard:hover {
  background-color: var(--color-secondary);
  color: var(--color-white);
}

/* Language Switcher - Right */
.header__lang {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
  .header__logo {
    padding: 0 var(--spacing-md);
  }
  
  .header__logo-img {
    height: 60px;
  }
  
  .header__nav-link {
    padding: var(--spacing-sm) var(--spacing-sm);
  }
  
  .header__nav-link-main {
    font-size: 0.7rem;
  }
}

/* Hamburger Button */
.header__hamburger {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 50px;
  height: 100%;
  padding: 0 var(--spacing-md);
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.header__hamburger-line {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-white);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.header__hamburger:hover .header__hamburger-line {
  background-color: var(--color-secondary);
}

@media (max-width: 768px) {
  .header {
    height: 64px;
  }
  
  .header__container {
    padding-right: 0;
  }
  
  .header__logo {
    padding: 0 var(--spacing-sm);
    flex: 1;
  }
  
  .header__logo-img {
    height: 44px;
  }
  
  .header__hamburger {
    display: flex;
  }
}
</style>
