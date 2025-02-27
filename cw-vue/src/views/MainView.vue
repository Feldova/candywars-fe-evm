<script setup lang="ts">
import {ref, computed} from 'vue'
import MainGame from '../components/MainGame.vue'

const city = ref(localStorage.getItem('city') || 'Denver')
const currentView = computed(() => {
    return MainGame
})
</script>
<template>
    {{ city }}
    <component :is="currentView" />
</template>