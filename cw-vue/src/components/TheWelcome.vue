<script setup lang="ts">
import { ref } from 'vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')

const network = ref('mainnet')
const walletAddress = ref('')

const connectWallet = () => {
  // Logic to connect wallet and navigate to a new page
  console.log(`Connecting wallet: ${walletAddress.value} on ${network.value}`)
  // Add navigation logic here
}
</script>

<template>
  <div class="home-screen">
    <h1 class="title">Candy Wars</h1>
    <div class="network-selector">
      <label for="network">Choose Network:</label>
      <select id="network" v-model="network">
        <option value="mainnet">Mainnet</option>
        <option value="testnet">Testnet</option>
      </select>
    </div>
    <div class="wallet-input">
      <label for="walletAddress">Wallet Address:</label>
      <input id="walletAddress" v-model="walletAddress" type="text" placeholder="Enter your wallet address" />
    </div>
    <button @click="connectWallet">Connect Wallet</button>
  </div>
</template>

<style scoped>
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