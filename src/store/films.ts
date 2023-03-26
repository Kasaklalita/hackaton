import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFilmsStore = defineStore("films", () => {
  const films = reactive(["film1", "film2"]);

  return {
    films,
  };
});
