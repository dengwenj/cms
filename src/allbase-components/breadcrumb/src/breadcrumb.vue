<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'

import { Ibreadcrumb } from '../types'

defineProps({
  breadcrumbs: {
    type: Array as PropType<Ibreadcrumb[]>,
    default: () => []
  }
})
</script>

<template>
  <div class="dwj-breadcrumb">
    <ElBreadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <ElBreadcrumbItem :to="{ path: item.path || '' }">{{ item.name }}</ElBreadcrumbItem>
      </template>
    </ElBreadcrumb>
  </div>
</template>
