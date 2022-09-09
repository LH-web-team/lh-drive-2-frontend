<script lang="ts" setup>
const path = ["My Files", "Folder A", "Folder B", "Folder C"];
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="folder in path">
      <el-button size="large" text>{{ folder }}</el-button>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
