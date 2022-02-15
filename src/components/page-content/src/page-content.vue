<script lang="ts" setup>
import { defineProps, computed, defineExpose, ref, watch } from 'vue'
import { ElButton } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'

import { useStore } from '@/store'
import DwjTable from '@/allbase-components/table'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

// 双向绑定 pageInfo
const pageInfo = ref({
  pageCurrent: 0,
  pageSize: 10
})

const store = useStore()
const getListData = (queryInfo: any = {}) => {
  store.dispatch('system/getPageListAction', {
    // pageUrl: '/users/list',
    pageName: props.pageName,
    queryInfo: {
      offset: pageInfo.value.pageCurrent * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getListData()

// 当 pageCurrent 或者 pageSize 改变的时候会触发
watch(pageInfo, () => getListData(), { deep: true })

const pageList = computed(() => {
  return store.getters['system/pageListData'](props.pageName)
})
const pageCount = computed(() => {
  return store.getters['system/pageCountData'](props.pageName)
})

const selectionChange = (value: any) => {
  console.log(value)
}

defineExpose({
  getListData
})
</script>

<template>
  <div class="page-content">
    <DwjTable
      v-bind="contentTableConfig"
      :pageList="pageList"
      @selectionChange="selectionChange"
      :pageCount="pageCount"
      v-model:page="pageInfo"
    >
      <!-- header-handler 插槽 -->
      <template #header-handler>
        <ElButton type='primary'>新建用户</ElButton>
      </template>
      <!-- 内容插槽 -->
      <template #enable="zijiqudemingzi">
        <ElButton
          plain
          :type="zijiqudemingzi.row.enable ? 'success' : 'warning'"
          size='small'
        >
          {{ zijiqudemingzi.row.enable ? '启用' : '禁用' }}
        </ElButton>
      </template>
      <template #createAt="createAt">
        {{ $filters.formatTime(createAt.row.createAt) }}
      </template>
      <template #updateAt="updateAt">
        {{ $filters.formatTime(updateAt.row.updateAt) }}
      </template>
      <template #handle>
        <ElButton :icon="Edit" size='small' type="text">编辑</ElButton>
        <ElButton :icon="Delete" size="small" type='text' style="color: #e06c75;">删除</ElButton>
      </template>
    </DwjTable>
  </div>
</template>
