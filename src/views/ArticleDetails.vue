<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import BaseButton from "../components/base/BaseButton.vue";

const route = useRoute();

// Fetch Article Details
const isPageLoading = ref(false);
const articleDetails = ref(null);

if (route.params?.id) {
  isPageLoading.value = true;
  axios(`movies/${route.params?.id}`)
    .then(({ data }) => {
      articleDetails.value = data;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => (isPageLoading.value = false));
}
</script>

<template>
  <div>
    <PageLoader v-if="isPageLoading" />

    <article v-else>
      <div
        class="mt-8 p-8 bg-lightGray rounded-md w-[500px] mx-auto grid grid-cols-2"
      >
        <h2 class="text-2xl font-bold">Article Name:</h2>

        <h3 class="text-2xl">
          {{ articleDetails?.movie }}
        </h3>

        <h2 class="text-2xl font-bold">Article Rate:</h2>

        <h3 class="text-2xl">
          {{ articleDetails?.rating }}
        </h3>

        <BaseButton class="mt-4" variant="primary-outline">
          <router-link :to="{ name: 'Articles' }">
            Back to Articles
          </router-link>
        </BaseButton>
      </div>
    </article>
  </div>
</template>
