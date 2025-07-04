<template>
	<div>
		<Heading type="h1">Scoresheet</Heading>
		<UButton :onclick="game.reset"
			><NuxtLink to="/new-game">Reset</NuxtLink></UButton
		>
	</div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game';
const game = useGameStore();

if (!game.started) {
	await navigateTo('/new-game');
}
</script>
