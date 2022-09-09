<script lang="ts" setup></script>
<template>
  <div class="h-14 flex px-6 py-3 w-full">
    <el-button type="primary">
      <el-icon :size="20" class="align-middle"><i-ic-baseline-plus /></el-icon>
      <span class="font-semibold align-middle">Create</span>
    </el-button>

    <el-button text>
      <el-icon :size="20" class="align-middle"><i-ic-outline-file-upload /></el-icon>
      <span class="font-semibold align-middle">Upload</span>
    </el-button>

    <el-button text>
      <el-icon :size="20" class="align-middle"><i-ic-outline-share /></el-icon>
      <span class="font-semibold align-middle">Share</span>
    </el-button>
  </div>
</template>
