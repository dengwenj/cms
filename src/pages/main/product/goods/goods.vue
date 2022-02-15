<script lang="ts" setup>
import { ElImage } from 'element-plus'

import PageContent from '@/components/page-content'
import contentTableConfig from './config/content'
</script>

<template>
  <div class="goods">
    <PageContent :contentTableConfig="contentTableConfig" pageName="goods">
      <template #imgUrl="scope">
        <ElImage
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
      <template #oldPrice="scope">{{'￥' + scope.row.oldPrice}}</template>
    </PageContent>
  </div>
</template>
