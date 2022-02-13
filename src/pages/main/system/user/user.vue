<script setup lang="ts">
import DWJForm from '@/allbase-components/form'
import searchFormConfig from './config/search'

</script>

<template>
  <div class="user">
    <DWJForm v-bind="searchFormConfig" />
    <div class="content">内容</div>
  </div>
</template>
