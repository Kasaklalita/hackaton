<template>
  <div class="flex flex-col gap-8 items-center p-8">
    <h1 class="text-4xl">Импорт видео</h1>
    <div>
      <input type="file" />
      <PrimaryButton text="Загрузить" />
    </div>
    <video
      id="my-player"
      class="video-js"
      controls
      preload="auto"
      poster="//vjs.zencdn.net/v/oceans.png"
      data-setup="{}"
    >
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "../components/PrimaryButton.vue";
</script>

<style scoped></style>
