import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useGameStore = defineStore('game', () => {
  const started = useStorage('started', false);
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