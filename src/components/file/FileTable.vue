<script lang="ts" setup>
import { ElTable } from "element-plus";

const emit = defineEmits<{
  (e: "update:selectedFiles", v: FileBase[]): void;
}>();

const files = ref<FileBase[]>();
// fake loading
onMounted(() => {
  setTimeout(() => {
    files.value = [];
    for (let i = 0; i < 20; i++)
      files.value.push({
        name: `test${i}.xlsx`,
        updated: "2011-10-05",
        size: "200KB",
        shared: Math.random() < 0.5,
      });
  }, 2000);
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

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
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
    <template #empty>
      <template v-if="files === undefined">
        <el-skeleton class="w-full px-3 mt-6" v-for="i in 20">
          <template #template>
            <div class="grid grid-cols-4 gap-5 w-full pl-12">
              <el-skeleton-item
                v-for="i in 4"
                :style="{ width: `${getRandomArbitrary(30, 100)}%` }"
              />
            </div>
          </template>
        </el-skeleton>
      </template>
      <template v-else> No Data </template>
    </template>
  </el-table>
</template>

<style>
.el-table__empty-text {
  width: 100%;
}
</style>
