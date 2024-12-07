import { createRouter, createWebHistory } from "vue-router";
import Articles from "../views/Articles.vue";
import ContactUs from "../views/ContactUs.vue";
import Signup from "../views/Signup.vue";
import ArticleDetails from "../views/ArticleDetails.vue";

import { useAuthStore } from "../store/auth.js";

const routes = [
  {
    alias: "/",
    path: "/articles",
    name: "Articles",
    component: Articles,
    meta: { requiresAuth: false, layout: "Header" },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
    meta: { requiresAuth: false, layout: "Header" },
  },
  {
    path: "/article-details/:id",
    name: "ArticleDetails",
    component: ArticleDetails,
    meta: { requiresAuth: false, layout: "default" },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { requiresAuth: false, layout: "Auth", guest: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // If allow guest only and user logged in
  if (to.meta.guest && authStore.isAuthenticated) {
    next("/home");
    return;
  }

  // If not need auth
  else if (!to.meta.requiresAuth) {
    next();
    return;
  }

  // If Need Auth and user not logged in
  else if (!authStore.isAuthenticated) {
    next("/signup");
    return;
  }

  next();
});

export default router;
