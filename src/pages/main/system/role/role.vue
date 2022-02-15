<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import contentTableConfig from './config/content'
import searchFormConfig from './config/search'
</script>

<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig" pageName="role"></PageContent>
  </div>
</template>
