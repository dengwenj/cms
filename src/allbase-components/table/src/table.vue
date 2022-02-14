<script lang="ts" setup>
import { defineProps } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'

defineProps({
  pageList: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as any,
    required: true
  }
})
</script>

<template>
  <div class="dwj-table">
    <ElTable :data="pageList" border style="width: 100%">
      <template v-for="item in propList" :key="item.prop">
        <ElTableColumn v-bind="item" align='center'>
          <template #default="scope"> <!-- 这里在使用插槽，插槽里面在放插槽 -->
            <!-- slot 里面的属性就是可以用作用域插槽获取  在那边，比如：#createAt="at" at 就是个对象，对象里面有 hh 和 row 属性 -->
            <slot :name="item.slotName" hh="hh" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </ElTableColumn>>
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
