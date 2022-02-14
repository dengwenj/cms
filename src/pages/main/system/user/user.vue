<script setup lang="ts">
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
</script>

<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">内容</div>
  </div>
</template>
