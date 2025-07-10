<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import { RouterLink } from 'vue-router';

const gameStore = useGameStore();
</script>

<template>
  <main>
    Home page!
    <RouterLink @click="gameStore.startGame" to="/setup">Start game</RouterLink>
  </main>
</template>
