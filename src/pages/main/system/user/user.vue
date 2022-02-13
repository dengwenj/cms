<script setup lang="ts">
import DWJForm from '@/allbase-components/form'

import { IFormItem } from '@/allbase-components/form'

const formItem: IFormItem[] = [
  {
    type: 'input',
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  },
  {
    type: 'password',
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  },
  {
    type: 'input',
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名'
  },
  {
    type: 'select',
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名',
    options: [
      {
        title: 'dwj',
        value: '你好'
      },
      {
        title: 'zww',
        value: '你好啊'
      }
    ]
  },
  {
    type: 'datepicker',
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名',
    otherOptions: {
      'start-placeholder': '开始时间',
      'end-placeholder': '结束时间'
    }
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
