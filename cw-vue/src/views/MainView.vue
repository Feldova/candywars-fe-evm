<script setup lang="ts">
import {ref, computed} from 'vue'
import MainMenu from '@/components/MainMenu.vue'
import CityMap from '@/components/CityMap.vue';

const firstGame = localStorage.getItem('firstGame');
if(!firstGame) localStorage.setItem('firstGame', 'yes');

const city = ref(localStorage.getItem('city') || 'Denver')
const currentView = computed(() => {
    if(firstGame === 'yes') return CityMap;
    return MainMenu;
})
</script>
<template>
    <component :is="currentView" />
</template>