<script setup lang="ts">
import DWJForm from '@/allbase-components/form'

import { IFormItem } from '@/allbase-components/form'

const formItem: IFormItem[] = [
  {
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  },
  {
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  },
  {
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  },
  {
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  },
  {
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  }
]
</script>

<template>
  <div class="user">
    <div class="search">
      <DWJForm :formItem="formItem" />
    </div>
    <div class="content">内容</div>
  </div>
</template>
