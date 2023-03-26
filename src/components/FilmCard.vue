<template>
  <div class="bg-white rounded-lg shadow-lg w-80 h-48 p-4">
    <p class="text-xl font-medium">{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface FilmCardProps {
  title: string;
}

const props = defineProps<FilmCardProps>();
</script>

<style scoped></style>
