<template>
  <div class="flex flex-col gap-8 items-center p-8">
    <h1 class="text-4xl">Пресеты</h1>
    <div class="flex gap-8">
      <PresetCard
        v-for="preset in presets"
        :key="preset.title"
        :preset="preset"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import PresetCard from "../components/PresetCard.vue";
import { usePresetsStore } from "../store/presets";

const presetsStore = usePresetsStore();
const { presets } = storeToRefs(presetsStore);
</script>

<style scoped></style>
