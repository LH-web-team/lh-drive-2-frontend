<script setup lang="ts">
import { useRoute } from "vue-router";
import NavHeader from "./components/NavHeader.vue";
import NavDrawer from "./components/NavDrawer.vue";
const route = useRoute();
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <nav-header></nav-header>
    <div class="flex flex-1">
      <nav-drawer class="w-56"></nav-drawer>
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
