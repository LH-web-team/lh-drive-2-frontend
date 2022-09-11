<script lang="ts" setup>
import { ElTable } from "element-plus";
import { getRandomInt } from "element-plus/es/utils";
import { random } from "lodash";
import moment from "moment";
import { ref } from "vue";
const files: Partial<FileBase>[] = [];
for (let i = 0; i < 20; i++)
  files.push({
    name: "test.xlsx",
    updated: "2011-10-05",
    size: "200KB",
    shared: Math.random() < 0.5,
  });

const fileTableRef = ref<InstanceType<typeof ElTable>>();
const toggleSelection = (row: Partial<FileBase>) => {
  // @ts-expect-error
  fileTableRef.value?.toggleRowSelection(row, undefined);
};

const emit = defineEmits<{
  (e: "update:selectedFiles", v: Partial<FileBase>[]): void;
}>();
const onSelctionChange = (selectedRows: Partial<FileBase>[]) => {
  emit("update:selectedFiles", selectedRows);
};
</script>

<template>
  <el-table
    ref="fileTableRef"
    :data="files"
    class="w-full"
    @row-click="toggleSelection"
    @selection-change="onSelctionChange"
  >
    <el-table-column type="selection" width="55" class-name="!pl-3" />
    <el-table-column prop="name" label="Name" sortable />
    <el-table-column
      prop="updated"
      label="Date"
      sortable
      class-name="text-xs"
      label-class-name="text-base"
    />
    <el-table-column
      prop="size"
      label="File size"
      sortable
      class-name="text-xs"
      label-class-name="text-base"
    />
    <el-table-column
      label="Share"
      sortable
      class-name="text-xs"
      label-class-name="text-base"
    >
      <template #default="scope">
        <template v-if="scope.row.shared">
          <el-icon><i-ic-outline-people-alt /></el-icon> Shared
        </template>
        <template v-else> Private </template>
      </template>
    </el-table-column>
  </el-table>
</template>
