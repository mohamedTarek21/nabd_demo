<script setup>
import axios from "axios";
import HeaderLayout from "./layout/HeaderLayout.vue";
import DefaultLayout from "./layout/DefaultLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => {
  const layoutMap = {
    Default: DefaultLayout,
    Header: HeaderLayout,
    Auth: AuthLayout,
  };
  return layoutMap[route.meta.layout] || DefaultLayout;
});
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style scoped></style>
