<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'


const router = useRouter()
const gameStore = useGameStore()

const networks = ref(gameStore.networksList)
const network = ref(networks.value[0].name)
const walletAddress = ref('')

const connectWallet = () => {
  // Logic to connect wallet and navigate to a new page
  
  // navigate to the world view
  if (gameStore.updateWallet(walletAddress.value)) {
    console.log(`Connecting wallet: ${walletAddress.value} on ${network.value}`);
    router.push({ name: 'world' });
  }
}
</script>

<template>
  <div class="home-screen">
    <div class="home-input-container">
      <div class="network-selector">
        <label for="network">Choose Network:</label>
        <select id="network" v-model="network">
          <option v-for="network in networks" :key="network.chainId" :value="network.name">
            {{ network.name }}
          </option>
        </select>
      </div>
      <div class="wallet-input">
        <label for="walletAddress">Wallet Address:</label>
        <input id="walletAddress" v-model="walletAddress" type="text" placeholder="Enter your wallet address" />
      </div>
      <button @click="connectWallet">Connect Wallet</button>
    </div>
  </div>
</template>

<style scoped>
.home-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
}

.network-selector {
  display: flex;
  flex-direction: row;
}

.network-selector,
.wallet-input {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
</style>