<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Groupe', path: '/groupe' },
]

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="navbar" role="banner">
    <nav class="navbar-inner container" aria-label="Navigation principale">
      <router-link to="/" class="navbar-logo" @click="closeMenu">
        <img src="/logo.png" alt="ID Holding International" class="logo-img" />
      </router-link>

      <button
        class="menu-toggle"
        :aria-expanded="mobileMenuOpen"
        aria-controls="main-nav"
        aria-label="Ouvrir le menu"
        @click="toggleMenu"
      >
        <span class="bar" :class="{ open: mobileMenuOpen }"></span>
        <span class="bar" :class="{ open: mobileMenuOpen }"></span>
        <span class="bar" :class="{ open: mobileMenuOpen }"></span>
      </button>

      <ul id="main-nav" class="nav-links" :class="{ active: mobileMenuOpen }" role="menubar">
        <li v-for="link in navLinks" :key="link.path" role="none">
          <router-link
            :to="link.path"
            role="menuitem"
            class="nav-link"
            :class="{ current: route.path === link.path || (link.path !== '/' && route.path.startsWith(link.path)) }"
            @click="closeMenu"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 52px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  align-items: center;
}

.nav-link {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  border-radius: var(--radius);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-surface);
}

.nav-link.current {
  color: var(--color-primary);
  background-color: var(--color-surface-alt);
  font-weight: 600;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: var(--color-white);
    flex-direction: column;
    padding: 1.5rem;
    gap: 0.25rem;
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-120%);
    transition: transform 0.3s ease;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .nav-link {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
}
</style>
