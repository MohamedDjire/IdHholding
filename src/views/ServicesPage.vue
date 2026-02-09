<script setup>
import { useI18n } from 'vue-i18n'
import { services } from '@/data/services'
import PageHeader from '@/components/base/PageHeader.vue'
import ServiceDetail from '@/components/services/ServiceDetail.vue'

const { t } = useI18n()
</script>

<template>
  <main>
    <PageHeader 
      :title="t('services.pageTitle')"
      :subtitle="t('services.pageSubtitle')"
      :breadcrumb="t('services.breadcrumb')"
      background-image="/images/services/transport-minier.jpg"
    />

    <!-- Introduction -->
    <section class="section section--compact">
      <div class="container">
        <p class="intro-text">{{ t('services.intro') }}</p>
      </div>
    </section>

    <!-- Services Details -->
    <section class="section section--compact">
      <div class="container">
        <ServiceDetail 
          v-for="(service, index) in services" 
          :key="service.id"
          :service="service"
          :reverse="index % 2 !== 0"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.section--compact {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}

.intro-text {
  font-size: 1.125rem;
  color: var(--color-black);
  line-height: 1.8;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  font-weight: 400;
}
</style>
