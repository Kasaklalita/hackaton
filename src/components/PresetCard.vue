<template>
  <div
    class="bg-white rounded-lg shadow-lg w-80 flex flex-col gap-4 items-center pb-4 overflow-hidden"
  >
    <img :src="props.preset.image" alt="" />
    <p class="text-lg font-medium">{{ props.preset.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IPreset } from "../store/types";

interface PresetCardProps {
  preset: IPreset;
}

const props = defineProps<PresetCardProps>();
</script>
class="text-xl font-medium"
<style scoped></style>
