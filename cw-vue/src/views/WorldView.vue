<template>
    <div class="world-view">
        <div class="wallet-info">
            <p>Wallet Address: {{ walletAddress }}</p>
            <p>Balance: {{ balance }} {{ currencyType }}</p>
        </div>
        <div class="content">
            <div class="cities-list">
                <h2>Cities</h2>
                <div>                
                    <h3>NA</h3>
                    <ul>
                        <li v-for="city in cities" :key="city.id" @click="selectCity(city)">
                            {{ city.name }}
                        </li>
                    </ul>
                    <h3>SA</h3>
                    <ul>
                        <li v-for="city in southAmericanCities" :key="city.id" @click="selectCity(city)">
                            {{ city.name }}
                        </li>
                    </ul>
                </div>
                <div>                
                    <h3>Europe</h3>
                    <ul>
                        <li v-for="city in europeanCities" :key="city.id" @click="selectCity(city)">
                            {{ city.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="city-details" v-if="selectedCity">
                <h2>{{ selectedCity.name }}</h2>
                <p>{{ selectedCity.description }}</p>
                <button @click="openCity" class="open-city-button">Open City</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGameStore } from '../stores/game';
import { useRouter } from 'vue-router';
import type { City } from '../models/types';

const router = useRouter();
const gameStore = useGameStore()


const walletAddress = ref(gameStore.walletAddress);
const balance = ref(0); // Replace with actual balance
const currencyType = ref('ETH');
const cities = ref<City[]>([
    { id: 1, name: 'Denver', description: 'Description of City 1' },
    { id: 2, name: 'Austin', description: 'Description of City 2' },
    { id: 3, name: 'Los Angeles', description: 'Description of City 3' },
    { id: 3, name: 'New York', description: 'Description of City 3' },
]);
const southAmericanCities = ref<City[]>([
    { id: 4, name: 'Buenos Aires', description: 'Description of City 4' },
    { id: 5, name: 'Santiago', description: 'Description of City 5' },
    { id: 6, name: 'Lima', description: 'Description of City 6' },
]);
const europeanCities = ref<City[]>([
    { id: 7, name: 'Paris', description: 'Description of City 7' },
    { id: 8, name: 'Berlin', description: 'Description of City 8' },
    { id: 9, name: 'London', description: 'Description of City 9' },
]);
const selectedCity = ref<City | null>(null);

function selectCity(city: City) {
    selectedCity.value = city;
}
function openCity() {
    gameStore.setSelectedCity(selectedCity.value!);
    localStorage.setItem('city', selectedCity.value!.name);
    router.push({ name: 'game' });
}
</script>

<style scoped>
.open-city-button {
    position: absolute;
    bottom: 40px;
}
.world-view {
    padding: 20px;
}

.wallet-info {
    margin-bottom: 20px;
}

.content {
    display: flex;
}

.cities-list {
    width: 33%;
}

.cities-list ul {
    list-style-type: none;
    padding: 0;
}

.cities-list li {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
}

.city-details {
    width: 67%;
    padding-left: 20px;
}
</style>