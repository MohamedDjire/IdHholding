<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { companyInfo } from '@/data/company'
import { references } from '@/data/partners'

const { t } = useI18n()
const appStore = useAppStore()

const aboutLinks = [
  { path: '/a-propos', key: 'Mot du directeur' },
  { path: '/a-propos', key: 'Présentation' },
  { path: '/a-propos', key: 'Histoire' }
]

const activityLinks = [
  { path: '/activites', key: 'Transport miniers' },
  { path: '/activites', key: 'Transport conteneurs' },
  { path: '/activites', key: 'Transport carburant' }
]

const menuLinks = [
  { path: '/parc-automobile', key: 'Parc automobile' },
  { path: '/contacts', key: 'Contacts' }
]
</script>

<template>
  <footer class="footer">
    <div class="footer__main container">
      <!-- Company Info -->
      <div class="footer__col footer__col--info">
        <img 
          src="/images/logo/id-holding-logo.png" 
          alt="ID Holding International"
          class="footer__logo"
        />
        <p class="footer__description">
          {{ t('footer.description') }}
        </p>
        <!-- Social Links -->
        <div class="footer__social">
          <a :href="companyInfo.social.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a :href="companyInfo.social.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a :href="companyInfo.social.twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a :href="companyInfo.social.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- References -->
      <div class="footer__col">
        <h4 class="footer__title">{{ t('footer.references') }}</h4>
        <ul class="footer__links">
          <li v-for="ref in references" :key="ref.id">
            <span>{{ ref.name }}</span>
          </li>
        </ul>
      </div>

      <!-- About Links -->
      <div class="footer__col">
        <h4 class="footer__title">{{ t('footer.aboutLinks') }}</h4>
        <ul class="footer__links">
          <li v-for="link in aboutLinks" :key="link.key">
            <router-link :to="link.path">{{ link.key }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Activities Links -->
      <div class="footer__col">
        <h4 class="footer__title">{{ t('footer.activitiesLinks') }}</h4>
        <ul class="footer__links">
          <li v-for="link in activityLinks" :key="link.key">
            <router-link :to="link.path">{{ link.key }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Menu Links -->
      <div class="footer__col">
        <h4 class="footer__title">{{ t('footer.menuLinks') }}</h4>
        <ul class="footer__links">
          <li v-for="link in menuLinks" :key="link.key">
            <router-link :to="link.path">{{ link.key }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer__bottom">
      <div class="container">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.footer__main {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: var(--spacing-xl);
  padding: var(--spacing-3xl) 0;
}

.footer__col--info {
  padding-right: var(--spacing-xl);
}

.footer__logo {
  height: 80px;
  width: auto;
  max-width: 250px;
  margin-bottom: var(--spacing-lg);
  object-fit: contain;
  display: block;
}

.footer__description {
  font-size: 0.9375rem;
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.footer__social {
  display: flex;
  gap: var(--spacing-md);
}

.footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: var(--color-white);
  transition: all var(--transition-fast);
}

.footer__social a:hover {
  background-color: var(--color-secondary);
  transform: translateY(-3px);
}

.footer__title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  color: var(--color-white);
}

.footer__links {
  list-style: none;
}

.footer__links li {
  margin-bottom: var(--spacing-sm);
}

.footer__links a,
.footer__links span {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__links a:hover {
  color: var(--color-secondary);
}

.footer__bottom {
  background-color: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-lg) 0;
  text-align: center;
}

.footer__bottom p {
  font-size: 0.875rem;
  opacity: 0.8;
  margin: 0;
}

@media (max-width: 1024px) {
  .footer__main {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer__col--info {
    grid-column: span 2;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .footer__main {
    grid-template-columns: 1fr;
  }
  
  .footer__col--info {
    grid-column: span 1;
  }
  
  .footer__col {
    text-align: center;
  }
  
  .footer__social {
    justify-content: center;
  }
}
</style>
