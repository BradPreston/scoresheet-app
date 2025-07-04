<template>
  <div>
    <Hero>
      <template v-slot:heading>Game night just got easier</template>
      <template v-slot:subheading
        >You handle the fun. We'll handle the math.</template
      >
      <template v-slot:action>
        <UButton :onclick="startNewGame">Start New Game</UButton>
      </template>
    </Hero>
  </div>
</template>

<script setup lang="ts">
const startNewGame = () => navigateTo("/new-game");
</script>
