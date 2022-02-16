<script lang="ts" setup>
import { defineProps, computed, defineExpose, ref, watch, defineEmits } from 'vue'
import { ElButton, ElPopconfirm } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'

import { useStore } from '@/store'
import DwjTable from '@/allbase-components/table'
import usePermission from '@/hooks/usePermission'

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
const emit = defineEmits(['handleCreateClick', 'handleEditClick'])

// 双向绑定 pageInfo
const pageInfo = ref({
  pageCurrent: 1,
  pageSize: 10
})

const myCreate = usePermission(props.pageName, 'create')
const myDelete = usePermission(props.pageName, 'delete')
const myUpdate = usePermission(props.pageName, 'update')
const myQuery = usePermission(props.pageName, 'query')

const store = useStore()
const getListData = (queryInfo: any = {}) => {
  // 没有查询功能就不往后走了
  if (!myQuery) return

  store.dispatch('system/getPageListAction', {
    // pageUrl: '/users/list',
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.pageCurrent - 1) * pageInfo.value.pageSize,
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

// 获取其他的动态插槽名称
const { propList } = props.contentTableConfig
const slotNameFilterObj = propList.filter((item: any) => {
  if (item.slotName === 'status') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handle') return false
  return true
})

const selectionChange = (value: any) => {
  console.log(value)
}

// 点击删除
const handleDeleteClick = (item: any): boolean => {
  store.dispatch('system/deletePageData', {
    pageName: props.pageName,
    id: item.id
  })
  return true
}
// 点击编辑
const handleEditClick = (item: any) => {
  emit('handleEditClick', item)
}
// 点击新建
const handleCreateClick = () => {
  emit('handleCreateClick')
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
        <ElButton
          v-if="myCreate"
          type='primary'
          @click="handleCreateClick"
        >新建用户</ElButton>
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
      <template #handle="scope">
        <ElButton
          v-if="myUpdate"
          :icon="Edit"
          size='small'
          type="text"
          @click="handleEditClick(scope.row)"
        >编辑</ElButton>
        <ElPopconfirm title="是否确定删除" @confirm="handleDeleteClick(scope.row)">
          <template #reference>
            <ElButton
              v-if="myDelete"
              :icon="Delete"
              size="small"
              type='text'
              style="color: #e06c75;"
            >删除</ElButton>
          </template>
        </ElPopconfirm>
      </template>
      <!-- 动态插槽 -->
      <template v-for="item in slotNameFilterObj" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </DwjTable>
  </div>
</template>
