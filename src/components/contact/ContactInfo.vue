<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { companyInfo } from '@/data/company'

const { t } = useI18n()
const appStore = useAppStore()
</script>

<template>
  <div class="contact-info">
    <h2 class="contact-info__title">{{ t('contact.info.title') }}</h2>

    <div class="contact-info__items">
      <!-- Phone -->
      <div class="contact-info__item">
        <div class="contact-info__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <div class="contact-info__content">
          <h4>{{ t('contact.info.phone') }}</h4>
          <a :href="`tel:${companyInfo.contact.phone}`">{{ companyInfo.contact.phone }}</a>
          <a :href="`tel:${companyInfo.contact.phone2}`">{{ companyInfo.contact.phone2 }}</a>
        </div>
      </div>

      <!-- Email -->
      <div class="contact-info__item">
        <div class="contact-info__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </div>
        <div class="contact-info__content">
          <h4>{{ t('contact.info.email') }}</h4>
          <a :href="`mailto:${companyInfo.contact.email}`">{{ companyInfo.contact.email }}</a>
          <a :href="`mailto:${companyInfo.contact.email2}`">{{ companyInfo.contact.email2 }}</a>
        </div>
      </div>

      <!-- Address -->
      <div class="contact-info__item">
        <div class="contact-info__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div class="contact-info__content">
          <h4>{{ t('contact.info.address') }}</h4>
          <p>{{ companyInfo.address[`full_${appStore.locale}`] }}</p>
        </div>
      </div>

      <!-- Hours -->
      <div class="contact-info__item">
        <div class="contact-info__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="contact-info__content">
          <h4>{{ t('contact.info.hours') }}</h4>
          <p>{{ companyInfo.hours[`weekdays_${appStore.locale}`] }}</p>
          <p>{{ companyInfo.hours[`saturday_${appStore.locale}`] }}</p>
          <p>{{ companyInfo.hours[`sunday_${appStore.locale}`] }}</p>
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <div class="contact-info__social">
      <h4>{{ t('contact.social.title') }}</h4>
      <div class="social-links">
        <a :href="companyInfo.social.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a :href="companyInfo.social.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a :href="companyInfo.social.twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a :href="companyInfo.social.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.354-.2-6.782-2.618-6.979-6.98-.059-1.28-.073-1.689-.073-4.948 0-3.259.013-3.667.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.contact-info__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: var(--spacing-xl);
}

.contact-info__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.contact-info__item {
  display: flex;
  gap: var(--spacing-md);
}

.contact-info__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: var(--radius-lg);
  color: var(--color-white);
  flex-shrink: 0;
}

.contact-info__content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--spacing-xs);
}

.contact-info__content a,
.contact-info__content p {
  font-size: 0.9375rem;
  color: var(--color-gray);
  line-height: 1.6;
  display: block;
  margin-bottom: 0;
}

.contact-info__content a:hover {
  color: var(--color-secondary);
}

.contact-info__social h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-black);
  margin-bottom: var(--spacing-md);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
  color: var(--color-white);
  transition: all var(--transition-fast);
}

.social-links a:hover {
  background-color: var(--color-secondary);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .contact-info {
    padding: var(--spacing-xl);
  }
  
  .contact-info__title {
    font-size: 1.25rem;
  }
  
  .contact-info__icon {
    width: 44px;
    height: 44px;
  }
  
  .contact-info__content h4 {
    font-size: 0.9375rem;
  }
  
  .contact-info__content a,
  .contact-info__content p {
    font-size: 0.875rem;
    word-break: break-word;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
}
</style>
