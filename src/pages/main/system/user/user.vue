<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import searchFormConfig from './config/search'
import contentTableConfig from './config/content'
</script>

<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <PageContent :contentTableConfig="contentTableConfig"></PageContent>
    </div>
  </div>
</template>
