import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FilmsPage from "../pages/FilmsPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import PresetsPage from "../pages/PresetsPage.vue";
import UserPage from "../pages/UserPage.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/films",
      component: FilmsPage,
    },
    {
      path: "/settings",
      component: SettingsPage,
    },
    {
      path: "/presets",
      component: PresetsPage,
    },
    {
      path: "/user",
      component: UserPage,
    },
  ],
});

export { router };
