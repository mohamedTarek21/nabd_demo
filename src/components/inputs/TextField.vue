<script setup>
import { ref, toRef } from "vue";
import { useField } from "vee-validate";

let props = defineProps({
  name: {
    type: String,
    requird: true,
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  type: {
    type: String,
    default: "text",
  },
  required: {
    type: Boolean,
  },
  rules: {
    type: Object,
  },
  placeHolder: {
    type: String,
    default: "",
  },
  initialValue: {
    type: String,
  },
});

const { value, errors, setErrors } = useField(
  toRef(props, "name"),
  props.rules,
  {
    validateOnValueUpdate: false,
  }
);

function clearErrors() {
  setErrors([]);
}

value.value = props.initialValue || "";
const showPassword = ref(false);
</script>

<template>
  <div data-flag="parent">
    <div class="flex gap-5 items-center mb-1">
      <label :for="label" :class="{ 'required-field': required }">{{
        label
      }}</label>
    </div>
    <div class="relative">
      <input
        v-model="value"
        :id="label"
        :error-messages="errors"
        :type="showPassword ? 'text' : type"
        :readonly="readonly"
        :disabled="disabled"
        :maxlength="counter"
        :placeholder="placeHolder"
        @input="clearErrors()"
        class="pr-14"
      />
      <button
        type="button"
        class="absolute top-[3px] right-[-10px] bg-lightGray p-1 min-w-[50px]"
        @click="showPassword = !showPassword"
        v-if="type === 'password'"
      >
        {{ showPassword ? "Hide" : "Show" }}
      </button>
    </div>

    <p class="pt-1 error" v-if="errors.length">
      {{ errors[0] }}
    </p>
  </div>
</template>
