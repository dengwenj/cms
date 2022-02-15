<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'

const props = defineProps({
  pageList: {
    type: Array,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  propList: {
    type: Array as any,
    // required: true
  },
  isShowIndexColumn: {
    type: Boolean,
    default: false
  },
  isShowSelectColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
  },
  // 组件上写的 v-model
  page: {
    type: Object,
    default: () => ({ pageCurrent: 0, pageSize: 10 })
  }
})

const emit = defineEmits(['selectionChange', 'update:page'])

const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}

const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (pageCurrent: number) => {
  emit('update:page', { ...props.page, pageCurrent })
}
</script>

<template>
  <div class="dwj-table">
    <div class="header">
      <slot name="header">
        <div class="header-title-handler">
          <h3 class="title">{{ title }}</h3>
          <div class="handler">
            <slot name="header-handler"></slot>
          </div>
        </div>
      </slot>
    </div>
    <ElTable
      :data="pageList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <ElTableColumn
        v-if="isShowSelectColumn"
        type='selection'
        width="50"
        align="center"
      />
      <ElTableColumn
        v-if="isShowIndexColumn"
        type="index"
        align="center"
        label="序号"
        width="60"
      />
      <template v-for="item in propList" :key="item.prop">
        <ElTableColumn v-bind="item" align='center'>
          <template #default="scope"> <!-- 这里在使用插槽，插槽里面在放插槽 -->
            <!-- slot 里面的属性就是可以用作用域插槽获取  在那边，比如：#createAt="at" at 就是个对象，对象里面有 hh 和 row 属性 -->
            <slot :name="item.slotName" hh="hh" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </ElTableColumn>>
      </template>
    </ElTable>
    <div class="footer">
      <slot name="footer">
        <ElPagination
          :currentPage="page.pageCurrent"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </ElPagination>
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.dwj-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
  .header {
    .header-title-handler {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px 10px 10px;
    }
  }
  .el-pagination {
    padding-top: 20px;
    justify-content: right;
  }
}
</style>
