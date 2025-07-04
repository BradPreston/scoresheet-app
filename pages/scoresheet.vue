<template>
  <Heading type="h1">Scoresheet</Heading>
  <UButton :onclick="reset">Start Over</UButton>
</template>

<script setup lang="ts">
import { gameStore } from "#imports";

const game = gameStore();
const { started } = storeToRefs(game);

const reset = async () => {
  started.value = false;
  await navigateTo("/new-game");
};

if (!game.started) {
  await navigateTo("/new-game");
}
</script>
