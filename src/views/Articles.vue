<script setup>
import { ref } from "vue";
import axios from "axios";
import PageLoader from "../components/base/PageLoader.vue";

// Fetch Articles
const isPageLoading = ref(true);
const articles = ref([]);

axios
  .get("movies")
  .then(({ data }) => {
    articles.value = data;
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    isPageLoading.value = false;
  });
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold my-4 text-center">New Articles</h1>

    <PageLoader v-if="isPageLoading" />

    <main
      v-else
      class="grid grid-cols-2 xl:grid-cols-3 max-md:grid-cols-1 gap-[30px] max-lg:gap-3"
    >
      <ArticleCard v-for="item in articles" :key="item.Id" :item="item" />
    </main>
  </div>
</template>

<script setup></script>
