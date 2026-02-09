<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { locale } = useI18n()

function setLanguage(lang) {
  locale.value = lang
  appStore.setLocale(lang)
}
</script>

<template>
  <div class="lang-switcher">
    <button 
      :class="['lang-switcher__btn', { 'lang-switcher__btn--active': appStore.isFrench }]"
      @click="setLanguage('fr')"
    >
      FR
    </button>
    <button 
      :class="['lang-switcher__btn', { 'lang-switcher__btn--active': appStore.isEnglish }]"
      @click="setLanguage('en')"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  height: 100%;
  justify-content: center;
  position: relative;
}

.lang-switcher__btn {
  background: none;
  border: none;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-white);
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  text-transform: uppercase;
  position: relative;
}

.lang-switcher__btn:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}

.lang-switcher__btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.lang-switcher__btn--active {
  background-color: var(--color-secondary);
  color: var(--color-white);
  font-weight: 700;
}
</style>
