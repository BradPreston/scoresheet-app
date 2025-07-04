<template>
	<div>
		<Heading type="h1">New Game</Heading>
		<UButton :onclick="game.start"
			><NuxtLink to="/scoresheet">Start</NuxtLink></UButton
		>
	</div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game';
const game = useGameStore();
</script>
