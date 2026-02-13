<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const route = useRoute()
const appStore = useAppStore()

const navLinks = [
  { path: '/', key: 'nav.home', icon: 'home' },
  { path: '/a-propos', key: 'nav.about', icon: 'info' },
  { path: '/activites', key: 'nav.services', icon: 'truck' },
  { path: '/parc-automobile', key: 'nav.fleet', icon: 'car' },
  { path: '/contacts', key: 'nav.contact', icon: 'phone' }
]

// Close menu on route change
watch(
  () => route.path,
  () => {
    appStore.closeMobileMenu()
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div 
        v-if="appStore.mobileMenuOpen" 
        class="mobile-menu-overlay"
        @click="appStore.closeMobileMenu"
      ></div>
    </Transition>

    <Transition name="slide">
      <nav v-if="appStore.mobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu__header">
          <button 
            class="mobile-menu__close"
            @click="appStore.closeMobileMenu"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="mobile-menu__links">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="mobile-menu__link"
            :class="{ 'mobile-menu__link--active': route.path === link.path }"
          >
            {{ t(link.key) }}
          </router-link>
        </div>

        <div class="mobile-menu__actions">
          <a 
            href="mailto:contact@idholding-international.com" 
            class="mobile-menu__dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Dashboard
          </a>
        </div>

        <div class="mobile-menu__footer">
          <LanguageSwitcher />
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-overlay);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  max-width: 85vw;
  height: 100vh;
  height: 100dvh;
  background-color: var(--color-white);
  z-index: var(--z-modal);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-xl);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.mobile-menu__header {
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-lg);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-menu__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-black);
  transition: color var(--transition-fast);
}

.mobile-menu__close:hover {
  color: var(--color-secondary);
}

.mobile-menu__links {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
}

.mobile-menu__link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 1.125rem;
  color: var(--color-black);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-menu__link:hover,
.mobile-menu__link--active {
  background-color: var(--color-bg);
  color: var(--color-secondary);
}

.mobile-menu__actions {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
}

.mobile-menu__dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  text-transform: uppercase;
}

.mobile-menu__dashboard:hover {
  background-color: var(--color-secondary);
  color: var(--color-white);
}

.mobile-menu__footer {
  padding: var(--spacing-lg);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  margin-top: auto;
}

/* Transitions */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity var(--transition-base);
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform var(--transition-base);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
