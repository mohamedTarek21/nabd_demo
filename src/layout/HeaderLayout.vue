<script setup>
import NabdLogo from "../assets/logos/nabd-logo.jpg";
import BaseButton from "../components/base/BaseButton.vue";

import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();

import { useRouter } from "vue-router";
const router = useRouter();

function logout() {
  authStore.updateUser(null);
  router.push("/login");
}
</script>

<template>
  <header>
    <div class="flex justify-between items-center bg-[#000000] px-10">
      <!-- begin::Logo -->
      <div class="w-[100px] h-[100px] reltive z-10 cursor-pointer">
        <img :src="NabdLogo" alt="logo" @click="router.push('/')" />
      </div>
      <!-- end::Logo -->
      <!-- begin::nav -->
      <nav class="reltive z-10">
        <ul class="flex gap-8">
          <li class="text-white text-bold">
            <router-link :to="{ name: 'Articles' }"> Articles </router-link>
          </li>

          <li class="text-white">
            <router-link :to="{ name: 'ContactUs' }"> Contact Us</router-link>
          </li>
          <li class="text-white">
            <BaseButton
              variant="danger"
              size="sm"
              @click="logout"
              class="mt-[-5px]"
            >
              Logout
            </BaseButton>
          </li>
        </ul>
      </nav>
      <!-- end::nav -->
    </div>
  </header>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
a.router-link-active {
  color: #1399fc;

  &::after {
    content: "";
    background-color: #1399fc;
    width: 15px;
    height: 2px;
    border-style: solid;
    border-width: 0px;
    border-radius: 0px;
    margin-top: 3px;
    display: block;
  }
}
</style>
