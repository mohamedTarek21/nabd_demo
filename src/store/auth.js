import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: useStorage("auth", {}),
  }),

  getters: {
    isAuthenticated: (state) => !!state.user?.accessToken,
  },

  actions: {
    updateUser(currentUser) {
      this.user = currentUser;
    },
  },
});
