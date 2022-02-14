<script setup lang="ts">
import { computed } from 'vue'

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
  { prop: 'departmentId', label: '状态',  },
  { prop: 'cellphone', label: '手机号码', },
  { prop: 'createAt', label: '创建时间', },
  { prop: 'updateAt', label: '更新时间' },
]
</script>

<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <DwjTable :pageList="userList" :propList="propList" />
    </div>
  </div>
</template>
