<script setup lang="ts">
import { ref } from 'vue';
import { useGameStore } from '@/stores/game';
import { useConfirm } from 'primevue/useconfirm';
import { useRouter } from 'vue-router';
import type { Location } from '@/models/types';

const router = useRouter();
const confirm = useConfirm();
const gameStore = useGameStore();
const city = ref(gameStore.selectedCity!);
const locations = ref<Location[]>(gameStore.cityLocations);
const selectedLocation = ref<Location>();

const selectLocation = (location: Location) => {
    selectedLocation.value = location;
    confirm.require({
        message: `Are you sure you want to travel to ${location.name}?`,
        accept: confirmTravel,
        reject: () => {} // Do nothing
    });
}

const confirmTravel = () => {
    console.log(`Traveling to ${selectedLocation.value!.name}`);
    gameStore.travelToLocation();
    router.push({ name: 'game' });
}
</script>
<template>
    <div>
        <h1>{{ city.name }}</h1>
    </div>
    <div class="location-grid">
        <Button class="location" v-for="location in locations" :key="location.name"  @click="selectLocation(location)">
            <h1>{{ location.name }}</h1>
            <image :src="location.image" alt="location image" />
        </Button>
    </div>
    <ConfirmDialog v-if="selectedLocation" :modal="true" :closable="true" :showHeader="false" />
</template>