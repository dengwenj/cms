<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus'

import { useStore } from '@/store'
import DWJCard from '@/allbase-components/card'

const store = useStore()
store.dispatch('dashboard/getCategoryGoods')
</script>

<template>
  <div class="dashboard">
    <ElRow :gutter="10">
      <ElCol :span="7">
        <DWJCard title="分类商品数量(饼图)"></DWJCard>
      </ElCol>
      <ElCol :span="10">
        <DWJCard title="不同城市商品销量"></DWJCard>
      </ElCol>
      <ElCol :span="7">
        <DWJCard title="分类商品数量(玫瑰图)"></DWJCard>
      </ElCol>
    </ElRow>
    <ElRow :gutter="10" style="margin-top: 20px;">
      <ElCol :span="12">
        <DWJCard title="分类商品的销量"></DWJCard>
      </ElCol>
      <ElCol :span="12">
        <DWJCard title="分类商品的收藏"></DWJCard>
      </ElCol>
    </ElRow>
  </div>
</template>
