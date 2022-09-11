<script lang="ts" setup>
import logoUrl from "~/assets/drive-icon.png";
const handleSelect = () => {};
</script>

<template>
  <div class="!bg-blue-500 flex p-3 items-center h-full w-full">
    <img :src="logoUrl" class="h-full w-auto" />
    <div class="flex-grow"></div>
    <span class="text-white font-semibold mr-3">Testing Acc</span>
    <el-avatar class="!h-full !w-auto" src="https://via.placeholder.com/32x32">
      <img src="https://via.placeholder.com/32x32" />
    </el-avatar>
  </div>
</template>
