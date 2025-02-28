<script setup lang="ts">
import {ref, computed} from 'vue'
import MainGame from '../components/MainGame.vue'

const firstGame = localStorage.getItem('firstGame') || true;
const city = ref(localStorage.getItem('city') || 'Denver')
const currentView = computed(() => {
    if(firstGame) return MainGame;
    return MainGame;
})
</script>
<template>
    <component :is="currentView" />
</template>
<style scoped>
#CityLabel {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
}
</style>