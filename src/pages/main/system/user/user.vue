<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import searchFormConfig from './config/search'
import contentTableConfig from './config/content'
import usePageSearch from '@/hooks/usePageSearch'

// hook
const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch()
</script>

<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
    />
    <div class="content">
      <PageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      />
    </div>
  </div>
</template>
