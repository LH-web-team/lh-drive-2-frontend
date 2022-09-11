<script lang="ts" setup>
import { ref } from "vue";
import ActionBar from "~/components/file/ActionBar.vue";
import FilePath from "~/components/file/FilePath.vue";
import FileTable from "~/components/file/FileTable.vue";

const selectedFiles = ref<Partial<FileBase>[]>([]);
</script>
<template>
  <div class="flex flex-col">
    <action-bar :selected-files="selectedFiles"></action-bar>
    <hr />
    <div class="px-6 py-3 mt-5">
      <file-path></file-path>
      <file-table @update:selected-files="(v) => (selectedFiles = v)"></file-table>
    </div>
  </div>
</template>
