<script setup lang="ts">
import { ref } from 'vue'
import DWJForm from '@/allbase-components/form'
import searchFormConfig from './config/search'

const formData = ref({
  name: '',
  id: '',
  dz: '',
  createTime: ''
})

</script>

<template>
  <div class="user">
    <DWJForm v-bind="searchFormConfig" v-model="formData" />
    <div class="content">内容</div>
  </div>
</template>
