<script setup lang="ts">
import { useRoute } from "vue-router";
import NavHeader from "./components/NavHeader.vue";
import NavDrawer from "./components/NavDrawer.vue";
const route = useRoute();
</script>

<template>
  <el-container class="h-screen w-screen">
    <el-header class="!h-14">
      <nav-header></nav-header>
    </el-header>
    <el-container>
      <el-aside class="!w-56">
        <nav-drawer></nav-drawer>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style></style>
