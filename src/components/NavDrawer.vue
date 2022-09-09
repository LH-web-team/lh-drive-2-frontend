<script lang="ts" setup></script>

<template>
  <el-menu default-active="1" class="bg-grey-50 flex flex-col">
    <el-menu-item index="1">
      <el-icon><i-ri-folder-2-line /></el-icon>
      <span class="">My Files</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><i-ri-share-line /></el-icon>
      <span class="">Shared Files</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><i-ri-delete-bin-5-line /></el-icon>
      <span class="">Recycling bin</span>
    </el-menu-item>
    <div class="flex-grow"></div>
    <div class="mx-5 flex flex-col gap-2 mb-5">
      <el-progress :percentage="50" :show-text="false" />
      <span class="text-sm">
        <span class="text-blue-500 font-semibold">100MB</span> used of 5GB
      </span>
    </div>
  </el-menu>
</template>
