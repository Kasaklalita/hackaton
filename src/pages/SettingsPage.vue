<template>
  <div class="flex flex-col gap-8 items-center p-8">
    <h1 class="text-4xl">Настройки</h1>
    <div class="flex flex-col gap-4 w-100">
      <RangeSetting text="Яркость" />
      <RangeSetting text="Контрастность" />
      <RangeSetting text="Насыщенность" />
      <RangeSetting text="Резкость" />
      <PrimaryButton text="Применить" class="self-end" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "../components/PrimaryButton.vue";
import RangeSetting from "../components/RangeSetting.vue";
</script>

<style scoped></style>
