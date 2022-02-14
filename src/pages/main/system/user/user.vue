<script setup lang="ts">
import pageSearch from '@/components/page-search/src/page-search.vue'
import searchFormConfig from './config/search'
</script>

<template>
  <div class="user">
    <pageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">内容</div>
  </div>
</template>
