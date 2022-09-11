<script lang="ts" setup>
const router = useRouter();

const redirect = async () => {
  await router.push("/login");
};

onMounted(() => {
  redirect();
});
</script>

<template></template>
