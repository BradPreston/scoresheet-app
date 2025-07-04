<template>
  <h1 v-if="type == 'h1'" class="text-5xl font-black"><slot /></h1>
  <h2 v-if="type == 'h2'" class="text-3xl font-extrabold"><slot /></h2>
  <h3 v-if="type == 'h3'" class="text-xl font-bold"><slot /></h3>
</template>

<script setup lang="ts">
defineProps<{
  type: "h1" | "h2" | "h3";
}>();
</script>
