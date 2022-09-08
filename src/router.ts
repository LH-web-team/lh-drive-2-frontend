import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import { useAuthStore } from "./stores/auth";

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    return {
      path: "/login/",
      query: { redirectTo: to.fullPath },
    };
  }
});

export { router };
