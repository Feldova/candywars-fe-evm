import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { networks, Network } from '../models/network-chains'

export const useGameStore = defineStore('game', () => {
  const storedWalletAddress = localStorage.getItem('walletAddress') || '';
  const walletAddress = ref(storedWalletAddress);
  const networksList = ref(networks);
  const selectedNewtwork = ref(networks[0]);
  const selectedCity = ref<City | null>(null);

  function updateWallet(addr: string) {
    localStorage.setItem('walletAddress', addr);
    walletAddress.value = addr;
  }

  function updateNetwork(network: Network) {
    localStorage.setItem('selectedNetwork', network.name);
    selectedNewtwork.value = network;
  }

  function setSelectedCity(city: City) {
    selectedCity.value = city;
  }

  return {
    walletAddress, networksList, selectedNewtwork, selectedCity,
    setSelectedCity, updateNetwork, updateWallet
  }
})
