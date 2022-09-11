<script lang="ts" setup>
import moment from "moment";

const props = defineProps<{
  file: FileBase;
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "update:visible", v: boolean): void;
}>();

const items: { label: string; field: (f: FileBase) => string }[] = [
  { label: "Name", field: (f) => f.name },
  { label: "File Type", field: (f) => "xlsx" },
  { label: "Created at", field: (f) => "2000-01-01" },
  { label: "Updated at", field: (f) => f.updated },
  { label: "Size", field: (f) => f.size },
  { label: "Path", field: (f) => "/file/test/test/test.xlsx" },
];
</script>

<template>
  <div v-show="visible" class="h-full flex flex-col p-4">
    <div class="flex justify-between items-center">
      <h2 class="flex gap-3 items-center">
        <i-ri-file-3-line />
        <span class="font-semibold">test.xlsx</span>
      </h2>
      <el-button text circle @click="emit('update:visible', false)">
        <el-icon :size="18"><i-ic-baseline-close /></el-icon>
      </el-button>
    </div>
    <div v-for="item in items" class="flex flex-col mt-3">
      <span class="font-semibold text-sm text-gray-700">{{ item.label }}</span>
      <span>{{ item.field(file) }}</span>
    </div>
  </div>
</template>
