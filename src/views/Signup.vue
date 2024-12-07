<script setup>
import { ref } from "vue";
import * as yup from "yup";
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import axios from "axios";

import { useAuthStore } from "../store/auth.js";
const authStore = useAuthStore();

const router = useRouter();

const schema = yup.object({
  username: yup.string().required().label("User Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup
    .string()
    .required()
    .matches(
      /^\+(\d{7,15})$/,
      "Phone number must be in the format +XXXXXXXXXXX (7-15 digits)"
    )
    .label("Phone"),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 50 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .label("Password"),
  website: yup.string().required().url("Please enter a valid URL").label("URL"),
});

const isLoading = ref(false);

function login(model) {
  if (isLoading.value) return;
  isLoading.value = true;
  axios
    .post("siup_.php", model)
    .then(({ data }) => {
      authStore.updateUser(data);
      router.push("/");
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <Form
    @submit="login"
    :validation-schema="schema"
    class="mx-auto py-12 p-14 max-sm:!w-full"
  >
    <p class="text-[24px] font-[400] text-[#060C3C] text-center mb-2">
      Welcome to Nabd
    </p>
    <h2 class="text-[16px] font-[400] text-[#666666] text-center mb-6">
      Signup to get started
    </h2>

    <div class="flex flex-col gap-4">
      <TextField
        label="Username"
        name="username"
        placeHolder="Username"
        initialValue="JohnDoe"
        type="text"
        required
      />
      <TextField
        label="Email"
        name="email"
        placeHolder="Email"
        initialValue="john.doe@example.com"
        type="email"
        required
      />
      <TextField
        label="Phone Number"
        name="phone"
        placeHolder="Phone Number"
        initialValue="+1234567890"
        type="tel"
        required
      />
      <TextField
        label="Password"
        name="password"
        placeHolder="Password"
        initialValue="SecurePass1!"
        type="password"
        required
      />
      <TextField
        label="Website"
        name="website"
        placeHolder="Website"
        initialValue="https://example.com"
        type="text"
        required
      />
    </div>
    <BaseButton
      fullWidth
      type="submit"
      class="text-center mt-4 bg-[#FB8B23] rounded-[58px]"
      variant="primary"
      :isLoading="isLoading"
    >
      Signup
    </BaseButton>
  </Form>
</template>
