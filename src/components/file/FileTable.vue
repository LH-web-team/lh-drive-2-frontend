<script lang="ts" setup>
import { ElTable } from "element-plus";

const emit = defineEmits<{
  (e: "update:selectedFiles", v: FileBase[]): void;
}>();

const files: FileBase[] = [];
for (let i = 0; i < 20; i++)
  files.push({
    name: `test${i}.xlsx`,
    updated: "2011-10-05",
    size: "200KB",
    shared: Math.random() < 0.5,
  });

const selectedFiles = ref<FileBase[]>([]);
const onSelctionChange = (selectedRows: FileBase[]) => {
  selectedFiles.value = selectedRows;
};

const fileTableRef = ref<InstanceType<typeof ElTable>>();
const toggleSelection = (row: FileBase, column: any) => {
  if (column.no != 0) {
    fileTableRef.value?.clearSelection();
  }
  // @ts-expect-error
  fileTableRef.value?.toggleRowSelection(row, undefined);
  emit("update:selectedFiles", selectedFiles.value);
};
</script>

<template>
  <el-table
    ref="fileTableRef"
    :data="files"
    @cell-click="toggleSelection"
    @selection-change="onSelctionChange"
  >
    <el-table-column type="selection" width="55" class-name="!pl-3" />
    <el-table-column prop="name" label="Name" sortable />
    <el-table-column prop="updated" label="Date" sortable />
    <el-table-column prop="size" label="File size" sortable />
    <el-table-column label="Share" sortable>
      <template #default="scope">
        <template v-if="scope.row.shared">
          <el-icon><i-ic-outline-people-alt /></el-icon> Shared
        </template>
        <template v-else> Private </template>
      </template>
    </el-table-column>
  </el-table>
</template>
