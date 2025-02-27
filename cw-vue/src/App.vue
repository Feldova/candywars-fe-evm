<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import './assets/main.css'
</script>

<template>
  <div id="nav">
    <h1>Candy Wars</h1>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
