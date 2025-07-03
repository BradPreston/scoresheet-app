import { defineStore } from "pinia";

export const gameStore = defineStore("game", () => {
  const started = ref(false);

  return { started };
});
