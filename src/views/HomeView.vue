<script setup lang="ts">
import Hero from '@/components/layout/Hero.vue';
</script>

<template>
  <main>
    <Hero
      title="Game night just got easier!"
      subtitle="You handle the fun, we'll handle the scores."
      :action="{ text: 'Start a game', link: '/setup' }"
    />
  </main>
</template>

