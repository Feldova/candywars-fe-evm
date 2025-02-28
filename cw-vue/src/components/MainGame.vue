<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '@/stores/game';
import { useRouter } from 'vue-router'
import type { UserCandyItem, StoreCandyItem } from '../models/types';

const gameStore = useGameStore()
const router = useRouter()

const storefrontLocation = ref('School')

const navigateBack = () => {
    router.push({ name: 'game' })
}

const buyItem = (item: StoreCandyItem) => {
    // gameStore.buyItem(item)
    console.log('Buying item:', item)
}

const sellItem = (item: UserCandyItem) => {
    // gameStore.sellItem(item)
    console.log('Selling item:', item)
}

</script>
<template>
    <div class="store-menu-container">
        <div class="store-menu">
            <button @click="navigateBack">&lt; back</button>
            <h1 class="location-title">{{ storefrontLocation }}</h1>
        </div>
        <div class="columns">
            <div class="column">
                <h2 class="list-title">Inventory</h2>
                <ul class="menu-list">
                    <li v-for="item in gameStore.userInventory" :key="item.candy.id" @click="sellItem(item)">
                        <img class="candy-image" :src="item.candy.image" alt="candy image" />
                        <span>{{ item.candy.name }}</span>
                        <span>{{ item.quantity }}</span>
                    </li>
                </ul>
            </div>
            <div class="column">
                <h2 class="list-title">Store</h2>
                <ul class="menu-list">
                    <li v-for="item in gameStore.storeInventory" :key="item.candy.id" @click="buyItem(item)">
                        <img class="candy-image" :src="item.candy.image" alt="candy image" />
                        <span>{{ item.candy.name }}</span>
                        <span>{{ item.price }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: #0D1622;
}
.location-title {
    margin: auto;
}
.store-menu {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.store-menu-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    background-color: #0D1622;
}
.columns {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.column {
    width: 45%;
    background-color: #111;
    padding: 15px;
    border: 1px solid #333;
}
.menu-list {
    list-style-type: none;
    padding: 0;
}
.menu-list li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1px solid #333;
}
</style>