<script setup lang="ts">
import { computed } from 'vue'
import { ElButton } from 'element-plus'

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

const userList = computed(() => store.state.system.userList)

const propList = [
  { prop: 'name', label: '姓名',  },
  { prop: 'realname', label: '真实姓名', },
  { prop: 'cellphone', label: '手机号码', },
  { prop: 'enable', label: '状态', slotName: 'enable'  },
  { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
]
</script>

<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <DwjTable :pageList="userList" :propList="propList">
        <template #enable="zijiqudemingzi">
          <ElButton
            plain
            :type="zijiqudemingzi.row.enable ? 'success' : 'warning'"
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
      </DwjTable>
    </div>
  </div>
</template>
