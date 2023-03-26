import { defineStore } from "pinia";
import { reactive } from "vue";
import { IPreset } from "./types";

export const usePresetsStore = defineStore("presets", () => {
  const presets = reactive<IPreset[]>([
    {
      image:
        "https://www.shutterstock.com/image-photo/beautiful-seascape-thailand-during-sunset-260nw-1777125524.jpg",
      title: "Preset 1",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/beautiful-seascape-thailand-during-sunset-260nw-1777125524.jpg",
      title: "Preset 2",
    },
  ]);
  return { presets };
});
