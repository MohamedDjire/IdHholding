<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 50 // millisecondes entre chaque caractère
  },
  delay: {
    type: Number,
    default: 0 // délai avant de commencer
  }
})

const displayedText = ref('')
const isTyping = ref(false)
const textElement = ref(null)
let typingInterval = null
let observer = null

function startTyping() {
  if (isTyping.value) return
  isTyping.value = true
  displayedText.value = ''
  let index = 0
  
  setTimeout(() => {
    typingInterval = setInterval(() => {
      if (index < props.text.length) {
        displayedText.value += props.text[index]
        index++
      } else {
        clearInterval(typingInterval)
        isTyping.value = false
      }
    }, props.speed)
  }, props.delay)
}

onMounted(() => {
  // Utiliser Intersection Observer pour déclencher l'animation quand l'élément est visible
  if (textElement.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping.value && displayedText.value === '') {
            startTyping()
            // Arrêter d'observer une fois l'animation déclenchée
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(textElement.value)
  }
})

onUnmounted(() => {
  if (typingInterval) {
    clearInterval(typingInterval)
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <span ref="textElement" class="typewriter-text">
    {{ displayedText }}<span class="typewriter-text__cursor" v-if="isTyping || displayedText.length < text.length">|</span>
  </span>
</template>

<style scoped>
.typewriter-text {
  display: inline-block;
}

.typewriter-text__cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: var(--color-secondary);
  margin-left: 2px;
  animation: blink 1s infinite;
  vertical-align: baseline;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>
