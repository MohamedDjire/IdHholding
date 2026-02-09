<script setup>
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

defineProps({
  member: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="team-member">
    <div class="team-member__image">
      <img :src="member.image" :alt="member.name" />
    </div>
    <div class="team-member__content">
      <h3 class="team-member__name">{{ member.name }}</h3>
      <span class="team-member__position">{{ member[`position_${appStore.locale}`] }}</span>
      <p class="team-member__bio">{{ member[`bio_${appStore.locale}`] }}</p>
    </div>
  </div>
</template>

<style scoped>
.team-member {
  display: flex;
  gap: var(--spacing-xl);
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.team-member__image {
  flex-shrink: 0;
  width: 200px;
  height: 250px;
  overflow: hidden;
}

.team-member__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member__content {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team-member__name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: var(--spacing-xs);
}

.team-member__position {
  font-size: 0.9375rem;
  color: var(--color-secondary);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.team-member__bio {
  font-size: 0.9375rem;
  color: var(--color-gray);
  line-height: 1.7;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .team-member {
    flex-direction: column;
  }
  
  .team-member__image {
    width: 100%;
    height: 250px;
  }
}
</style>
