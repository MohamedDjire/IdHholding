<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { aboutContent, qualityHSE } from '@/data/about'
import { team } from '@/data/team'
import PageHeader from '@/components/base/PageHeader.vue'
import Timeline from '@/components/about/Timeline.vue'
import ValuesGrid from '@/components/about/ValuesGrid.vue'
import TeamMember from '@/components/about/TeamMember.vue'

const { t } = useI18n()
const appStore = useAppStore()
</script>

<template>
  <main>
    <PageHeader 
      :title="t('about.pageTitle')"
      :breadcrumb="t('about.breadcrumb')"
      background-image="/images/about/notre-metier.png"
    />

    <!-- Presentation Section -->
    <section class="section">
      <div class="container">
        <div class="presentation-grid">
          <div class="presentation-content">
            <h2 class="section-title text-left">{{ t('about.presentation.title') }}</h2>
            <p class="presentation-intro">{{ aboutContent[`intro_${appStore.locale}`] }}</p>
            
            <div class="mission-vision">
              <div class="mission-box">
                <h3>{{ t('about.presentation.mission') }}</h3>
                <p>{{ aboutContent[`mission_${appStore.locale}`] }}</p>
              </div>
              <div class="vision-box">
                <h3>{{ t('about.presentation.vision') }}</h3>
                <p>{{ aboutContent[`vision_${appStore.locale}`] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('about.history.title') }}</h2>
        <Timeline />
      </div>
    </section>

    <!-- Values Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('about.values.title') }}</h2>
        <ValuesGrid />
      </div>
    </section>

    <!-- Team Section -->
    <section class="section bg-gray">
      <div class="container">
        <h2 class="section-title">{{ t('about.team.title') }}</h2>
        <div class="team-grid">
          <TeamMember 
            v-for="member in team" 
            :key="member.id" 
            :member="member" 
          />
        </div>
      </div>
    </section>

    <!-- Quality HSE Section -->
    <section class="section">
      <div class="container">
        <div class="quality-hse">
          <h2 class="section-title">{{ t('about.quality.title') }}</h2>
          <p class="quality-description">{{ qualityHSE[`description_${appStore.locale}`] }}</p>
          <div class="certifications">
            <span 
              v-for="cert in qualityHSE.certifications" 
              :key="cert" 
              class="certification-badge"
            >
              {{ cert }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.presentation-intro {
  font-size: 1.125rem;
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.mission-box,
.vision-box {
  background-color: var(--color-bg);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-secondary);
}

.mission-box h3,
.vision-box h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.mission-box p,
.vision-box p {
  font-size: 0.9375rem;
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.quality-hse {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.quality-description {
  font-size: 1.125rem;
  color: var(--color-gray);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.certifications {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.certification-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 600;
  border-radius: var(--radius-full);
}

@media (max-width: 768px) {
  .mission-vision {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
