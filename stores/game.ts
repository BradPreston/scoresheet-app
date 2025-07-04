import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', () => {
	const started = ref(false);
	const start = () => (started.value = true);
	const reset = () => (started.value = false);

	return { started, start, reset };
});
