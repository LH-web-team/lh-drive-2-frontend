<script lang="ts" setup>
const selectedFiles = ref<Partial<FileBase>[]>([]);
</script>
<template>
  <div class="flex flex-col h-full">
    <action-bar :selected-files="selectedFiles"></action-bar>
    <hr />
    <file-path class="mx-2 py-1"></file-path>
    <hr />
    <file-table
      class="h-full"
      @update:selected-files="(v) => (selectedFiles = v)"
    ></file-table>
  </div>
</template>
