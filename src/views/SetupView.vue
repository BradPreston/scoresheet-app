<script setup lang="ts">
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();
</script>

<template>
  <main>
    <h1>This is the setup page</h1>
    <p>Game started: {{ gameStore.started }}</p>
    <RouterLink @click="gameStore.endGame" to="/">End game</RouterLink>
  </main>
</template>