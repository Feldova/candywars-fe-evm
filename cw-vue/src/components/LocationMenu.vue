

<script lang="ts">
import { ref } from 'vue';
import { useGameStore } from '../stores/game';

const gameStore = useGameStore();

const locationName = ref(gameStore.selectedLocation);

</script>
<template>
    <div class="centered-div">
        <h1 id="LocationLabel"> {{ locationName }}</h1>
    </div>
</template>
<style scoped>
.centered-div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>