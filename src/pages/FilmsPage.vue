<template>
  <div class="flex flex-col gap-8 items-center p-8">
    <h1 class="text-4xl">Список фильмов</h1>
    <div class="flex gap-8">
      <FilmCard v-for="film in films" :key="film" :title="film" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import FilmCard from "../components/FilmCard.vue";
import { useFilmsStore } from "../store/films";

const filmsStore = useFilmsStore();
const { films } = storeToRefs(filmsStore);
</script>

<style scoped></style>
