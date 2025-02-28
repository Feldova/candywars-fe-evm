import { ref } from 'vue'
import { defineStore } from 'pinia'
import { networks, Network } from '../models/network-chains'
import { walletAddressRegex } from '@/models/constants'
import candyImgUrl from '@/assets/images/candy/candy_usdc.jpg'
import chocoWaferImgUrl from '@/assets/images/candy/choco_wafers.jpg'
import type { City, Location, UserCandyItem, StoreCandyItem } from '../models/types';

export const useGameStore = defineStore('game', () => {
  const storedWalletAddress = localStorage.getItem('walletAddress') || '';
  const walletAddress = ref(storedWalletAddress);
  const networksList = ref(networks);
  const selectedNewtwork = ref(networks[0]);
  const selectedCity = ref<City | null>(null);
  const selectedLocation = ref<Location | null>(null);
  const userInventory = ref<UserCandyItem[]>([
    { candy: { id: '1', name: 'Candy USDC', symbol: 'CUSDC', image: candyImgUrl }, quantity: 1000 },
  ]);
  const storeInventory = ref<StoreCandyItem[]>([
    { candy: { id: '2', name: 'Choco Wafer', symbol: 'CHOW', image: chocoWaferImgUrl }, price: 20, quantity: 5 },
  ]);

  function updateWallet(addr: string): Boolean {
    if (walletAddressRegex.test(addr)) {
      localStorage.setItem('walletAddress', addr);
      walletAddress.value = addr;
      return true;
    }
    return false;
  }

  function updateNetwork(network: Network) {
    localStorage.setItem('selectedNetwork', network.name);
    selectedNewtwork.value = network;
  }

  function setSelectedCity(city: City) {
    selectedCity.value = city;
  }

  return {
    walletAddress, networksList, selectedNewtwork, selectedCity, selectedLocation,
    userInventory, storeInventory,
    setSelectedCity, updateNetwork, updateWallet
  }
})
