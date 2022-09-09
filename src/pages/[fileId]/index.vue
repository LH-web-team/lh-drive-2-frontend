<script lang="ts" setup>
import ActionBar from "../../components/file/ActionBar.vue";
import FilePath from "~/components/file/FilePath.vue";
</script>
<template>
  <div class="flex flex-col w-full">
    <action-bar></action-bar>
    <hr />
    <div class="px-6 py-3 mt-6">
      <file-path></file-path>
    </div>
  </div>
</template>
