<script lang="ts" setup>
import { defineProps } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'

defineProps({
  pageList: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="dwj-table">
    <ElTable :data="pageList" border style="width: 100%">
      <template v-for="item in propList" :key="item.prop">
        <ElTableColumn v-bind="item" align='center' />
      </template>
    </ElTable>
  </div>
</template>

<style lang="less" scoped>
.dwj-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
