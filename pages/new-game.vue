<template>
  <Heading type="h1">New Game</Heading>
  <UButton :onclick="startGame">Start</UButton>
</template>

<script setup lang="ts">
import { gameStore } from "#imports";
const game = gameStore();
const { started } = storeToRefs(game);

const startGame = async () => {
  console.log("clicked");
  started.value = true;
  await navigateTo("/scoresheet");
};
</script>
