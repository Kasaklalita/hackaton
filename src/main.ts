import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Toast, {
  timeout: 2500,
});
app.use(router);
app.mount("#app");

var options = {};

var player = videojs("my-player", options, function onPlayerReady() {
  videojs.log("Your player is ready!");

  // In this context, `this` is the player that was created by Video.js.
  this.play();

  // How about an event listener?
  this.on("ended", function () {
    videojs.log("Awww...over so soon?!");
  });
});
