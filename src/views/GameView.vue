<script setup lang="ts">
import { useGameStore } from '@/stores/game';
import { useRouter } from 'vue-router';
const router = useRouter();
const gameStore = useGameStore();
if (!gameStore.started) {
  router.push({ name: 'home' });
}
</script>

<template>
  <main>
    <h1>Game page</h1>
  </main>
</template>