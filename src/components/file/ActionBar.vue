<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const props = defineProps<{
  selectedFiles: Partial<FileBase>[];
}>();

const normalActions = [
  {
    icon: "ic:baseline-plus",
    text: "Create",
    action: () => {},
  },
  {
    icon: "ic:outline-file-upload",
    text: "Upload",
    action: () => {},
  },
  {
    icon: "ri:share-box-line",
    text: "Share",
    action: () => {},
  },
];

const fileActions = [
  {
    icon: "ri:share-box-line",
    text: "Share",
    action: () => {},
  },
  {
    icon: "ri:share-box-line",
    text: "Download",
    action: () => {},
  },
  {
    icon: "ri:share-box-line",
    text: "Remove",
    action: () => {},
  },
  {
    icon: "ri:share-box-line",
    text: "Copy",
    action: () => {},
  },
  {
    icon: "ri:share-box-line",
    text: "Move",
    action: () => {},
  },
  {
    icon: "ri:share-box-line",
    text: "Rename",
    action: () => {},
  },
];
</script>
<template>
  <div class="h-14 flex px-6 py-3 w-full">
    <template v-if="selectedFiles.length == 0">
      <el-button
        v-for="(action, i) in normalActions"
        :type="i == 0 ? 'primary' : ''"
        :text="i > 0"
      >
        <el-icon :size="20" class="align-middle">
          <Icon :icon="action.icon"></Icon>
        </el-icon>
        <span class="font-semibold align-middle">{{ action.text }}</span>
      </el-button>
    </template>
    <template v-else>
      <el-button v-for="action in fileActions" @click="action.action()" text>
        <el-icon :size="20" class="align-middle">
          <Icon :icon="action.icon"></Icon>
        </el-icon>
        <span class="font-semibold align-middle">{{ action.text }}</span>
      </el-button>
    </template>
  </div>
</template>
