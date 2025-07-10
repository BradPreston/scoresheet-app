import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore('game', () => {
  const started = ref(false);
  const startGame = () => started.value = true;
  const endGame = () => started.value = false;
  const resetGame = () => started.value = false;

  return {
    started,
    startGame,
    endGame,
    resetGame
  };
});