<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const props = defineProps<{
  selectedFiles: FileBase[];
}>();

const emit = defineEmits<{
  (e: "toggleDetail"): void;
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
    icon: "ic:baseline-download",
    text: "Download",
    action: () => {},
  },
  {
    icon: "ri:delete-bin-5-line",
    text: "Remove",
    action: () => {},
  },
  {
    icon: "ic:baseline-content-copy",
    text: "Copy",
    action: () => {},
  },
  {
    icon: "ic:outline-drive-file-move",
    text: "Move",
    action: () => {},
  },
  {
    icon: "ic:baseline-drive-file-rename-outline",
    text: "Rename",
    action: () => {},
    condition: () => props.selectedFiles.length == 1,
  },
];
</script>
<template>
  <div class="h-12 flex px-6 py-2 w-full">
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
      <template v-for="action in fileActions">
        <el-button
          v-if="!action.condition || action.condition()"
          @click="action.action()"
          text
        >
          <el-icon :size="20" class="align-middle">
            <Icon :icon="action.icon"></Icon>
          </el-icon>
          <span class="font-semibold align-middle">{{ action.text }}</span>
        </el-button>
      </template>
    </template>
    <div class="flex-grow"></div>
    <el-button text @click="emit('toggleDetail')">
      <el-icon :size="20" class="align-middle">
        <i-ic-outline-info></i-ic-outline-info>
      </el-icon>
      <span class="font-semibold align-middle">Info</span>
    </el-button>
  </div>
</template>
