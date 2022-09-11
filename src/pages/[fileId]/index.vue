<script lang="ts" setup>
const selectedFiles = ref<FileBase[]>([]);
const showDetail = ref<boolean>(true);

const selectFiles = (v: FileBase[]) => {
  selectedFiles.value = v;
  showDetail.value = false;
};
</script>
<template>
  <div class="flex flex-col">
    <action-bar
      class="border-b !h-12"
      :selected-files="selectedFiles"
      @toggle-detail="showDetail = !showDetail"
    ></action-bar>
    <div class="flex-1 overflow-hidden flex flex-row">
      <div class="flex flex-col flex-grow overflow-hidden w-0">
        <file-path class="px-2 py-1 border-b"></file-path>
        <file-table @update:selected-files="selectFiles"></file-table>
      </div>
      <detail-pane
        v-if="selectedFiles.length == 1"
        v-model:visible="showDetail"
        :file="selectedFiles[0]"
        class="border-l w-56 flex-none"
      ></detail-pane>
    </div>
  </div>
</template>
