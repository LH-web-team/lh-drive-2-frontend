<script setup lang="ts"></script>

<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <nav-header class="h-14 flex-none"></nav-header>
    <div class="flex-1 flex overflow-hidden">
      <nav-drawer class="w-56 flex-none"></nav-drawer>
      <router-view class="flex-1"></router-view>
    </div>
  </div>
</template>

<style></style>
