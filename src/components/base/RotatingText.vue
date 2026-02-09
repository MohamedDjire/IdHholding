<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  words: {
    type: Array,
    required: true
  },
  baseText: {
    type: String,
    default: ''
  },
  interval: {
    type: Number,
    default: 3000 // 3 secondes par défaut
  }
})

const currentWordIndex = ref(0)
const currentWord = ref(props.words[0])
const isVisible = ref(true)
let rotationInterval = null

function rotateWords() {
  rotationInterval = setInterval(() => {
    isVisible.value = false
    
    setTimeout(() => {
      currentWordIndex.value = (currentWordIndex.value + 1) % props.words.length
      currentWord.value = props.words[currentWordIndex.value]
      isVisible.value = true
    }, 300) // Délai pour l'animation de sortie
  }, props.interval)
}

onMounted(() => {
  rotateWords()
})

onUnmounted(() => {
  if (rotationInterval) {
    clearInterval(rotationInterval)
  }
})
</script>

<template>
  <span class="rotating-text">
    <template v-if="baseText">{{ baseText }}</template>
    <span class="rotating-text__word-wrapper">
      <span 
        :class="['rotating-text__word', { 'rotating-text__word--visible': isVisible }]"
        :key="currentWord"
      >
        {{ currentWord }}
      </span>
    </span>
  </span>
</template>

<style scoped>
.rotating-text {
  display: inline-block;
}

.rotating-text__word-wrapper {
  display: inline-block;
  position: relative;
  min-width: 200px;
  text-align: left;
  margin-left: 0.3em;
}

.rotating-text__word {
  display: inline-block;
  color: var(--color-secondary);
  font-weight: 700;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.rotating-text__word--visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
