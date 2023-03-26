<template>
  <div class="h-screen w-full">
    <router-view></router-view>
    <div
      class="absolute bottom-0 left-0 w-full flex items-center justify-around p-8"
    >
      <MainNavbar />
    </div>
  </div>
</template>

<script setup lang="ts">
import CreationCards from "./components/CreationCards.vue";
import AllItems from "./components/AllItems.vue";
import MainTable from "./components/MainTable.vue";
import EventsCards from "./components/EventsCards.vue";
import MainNavbar from "./components/MainNavbar.vue";
</script>

<style scoped>
.main-container {
  width: 1300px;
}
</style>
