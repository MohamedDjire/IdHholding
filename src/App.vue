<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <img src="/logo.png" class="logo" alt="ID Holding International - Transporter pour l'industrie" />
  </div>
  <HelloWorld msg="ID Holding International" />
</template>

<style scoped>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #1e4a8caa);
}
</style>
