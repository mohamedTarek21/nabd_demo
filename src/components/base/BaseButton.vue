<script setup>
import { computed } from "vue";
import BaseLoader from "./BaseLoader.vue";

const props = defineProps({
  variant: String,
  fullWidth: Boolean,
  type: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "lg",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const buttonStyle = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary-600 hover:bg-primary-700 text-white";
    case "primary-outline":
      return "bg-white text-primary-700 border border-primary-700 ";
    case "danger":
      return "bg-danger-600 hover:bg-danger-700 text-white";
    case "flat":
      return "text-primary-600 px-0";
    default:
      return;
  }
});

const buttonSize = computed(() => {
  switch (props.size) {
    case "lg":
      return "px-8 py-4";
    case "md":
      return "px-4 py-2";
    case "sm":
      return "px-2 py-1";
    default:
      return;
  }
});
</script>

<template>
  <button
    :class="[
      'rounded-[1rem] transition duration-500 ease-in-out border-solid flex justify-center items-center gap-2',
      buttonStyle,
      buttonSize,
      { 'w-full': fullWidth, 'cursor-not-allowed': isLoading },
    ]"
    :type="type"
    :disabled="isLoading"
  >
    <slot></slot>
    <BaseLoader v-show="isLoading" />
  </button>
</template>
