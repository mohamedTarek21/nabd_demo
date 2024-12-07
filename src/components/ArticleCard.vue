<script setup>
const props = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <router-link :to="{ name: 'ArticleDetails', params: { id: item?.id } }">
    <div class="flex flex-col bg-lightGray p-4 rounded-md">
      <!-- begin::Article title -->
      <h2
        class="text-center mb-4 text-primary-600 text-2xl font-bold line-clamp-1"
      >
        {{ item.movie }}
      </h2>

      <!-- begin::Artilce image -->
      <div class="mb-2 h-[183px] aspect-[3/2]">
        <img
          class="object-cover rounded-lg w-full h-full border border-solid border-[#C5C5C5]"
          src="https://via.placeholder.com/150"
          alt="article image"
        />
      </div>
    </div>
  </router-link>
</template>
