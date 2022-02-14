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
  { prop: 'departmentId', label: '状态', slotName: 'departmentId'  },
  { prop: 'cellphone', label: '手机号码', },
  { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
]
</script>

<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <DwjTable :pageList="userList" :propList="propList">
        <template #departmentId="zijiqudemingzi">
          <ElButton
            :type="zijiqudemingzi.row.departmentId ? 'success' : 'warning'"
          >
            {{ zijiqudemingzi.row.departmentId ? '启用' : '禁用' }} {{ zijiqudemingzi.hh }}
          </ElButton>
        </template>
        <template #createAt="createAt">
          {{ createAt }}
        </template>
      </DwjTable>
    </div>
  </div>
</template>
