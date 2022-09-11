<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const login = async () => {
  await authStore.loginWith(username.value, password.value);
  await router.push(
    route.query["redirectTo"] ? (route.query["redirectTo"] as string) : "/home"
  );
};

const redirectIfLoggedIn = async () => {
  if (!authStore.token) return;
  await router.push(
    route.query["redirectTo"] ? (route.query["redirectTo"] as string) : "/home"
  );
};

onMounted(() => {
  redirectIfLoggedIn();
});

const username = ref("");
const password = ref("");

onMounted(() => {
  username.value = "admin";
  password.value = "admin";
});
</script>

<template></template>

<style></style>
