// src/stores/app.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const locale = ref(localStorage.getItem('locale') || 'fr')
  const mobileMenuOpen = ref(false)
  const isScrolled = ref(false)

  // Getters
  const currentLocale = computed(() => locale.value)
  const isFrench = computed(() => locale.value === 'fr')
  const isEnglish = computed(() => locale.value === 'en')

  // Actions
  function setLocale(newLocale) {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  function toggleLocale() {
    const newLocale = locale.value === 'fr' ? 'en' : 'fr'
    setLocale(newLocale)
  }

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  function closeMobileMenu() {
    mobileMenuOpen.value = false
  }

  function setScrolled(value) {
    isScrolled.value = value
  }

  // Helper function to get localized content from data
  function getLocalizedContent(item, field) {
    const key = `${field}_${locale.value}`
    return item[key] || item[`${field}_fr`] || ''
  }

  return {
    // State
    locale,
    mobileMenuOpen,
    isScrolled,
    // Getters
    currentLocale,
    isFrench,
    isEnglish,
    // Actions
    setLocale,
    toggleLocale,
    toggleMobileMenu,
    closeMobileMenu,
    setScrolled,
    getLocalizedContent
  }
})
