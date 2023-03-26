<template>
  <div class="flex gap-8 items-center">
    <router-link to="/"><i class="fa-solid fa-house text-2xl"></i></router-link>
    <router-link to="/films"
      ><i class="fa-solid fa-clapperboard text-2xl"></i
    ></router-link>
    <router-link to="/settings"
      ><i class="fa-solid fa-gear text-2xl"></i
    ></router-link>
    <router-link to="/presets">
      <i class="fa-solid fa-clone text-2xl"></i>
    </router-link>
    <router-link to="/user"
      ><i class="fa-solid fa-user text-2xl"></i
    ></router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-exact-active {
  @apply text-blue-500;
}
</style>
