<script setup lang="ts">
import { computed } from 'vue'
import { ElButton } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'

import DwjTable from '@/allbase-components/table'
import { useStore } from '@/store'

import pageSearch from '@/components/page-search/src/page-search.vue'
import searchFormConfig from './config/search'

const store = useStore()

store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

// 传给 table 的数据 props
const userList = computed(() => store.state.system.userList)
const propList = [
  { prop: 'name', label: '姓名', },
  { prop: 'realname', label: '真实姓名', },
  { prop: 'cellphone', label: '手机号码', },
  { prop: 'enable', label: '状态', width: '100', slotName: 'enable'  },
  { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
  { label: '编辑', slotName: 'handle', width: '130' },
]
const isShowIndexColumn = true
const isShowSelectColumn = true

const selectionChange = (value: any) => {
  console.log(value)
}
</script>

<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <DwjTable
        :pageList="userList"
        :propList="propList"
        :isShowIndexColumn="isShowIndexColumn"
        :isShowSelectColumn="isShowSelectColumn"
        @selectionChange="selectionChange"
      >
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
  </div>
</template>
