<script setup lang="ts">
import PageContent from '@/components/page-content'
import contentTableConfig from './config/content'
</script>

<template>
  <div class="menu">
    <PageContent :contentTableConfig="contentTableConfig" pageName="menu" />
  </div>
</template>
