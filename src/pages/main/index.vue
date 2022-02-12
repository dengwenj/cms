<script lang="ts" setup>
import { ref } from 'vue'
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'

import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

const isCollapse = ref(false)

const foldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<template>
  <div class="main">
    <ElContainer class="main-content">
      <ElAside class="main-aside" :width="isCollapse ? '60px' : '210px'">
        <NavMenu :isCollapse="isCollapse" />
      </ElAside>
      <ElContainer class="page-all">
        <ElHeader class="page-header">
          <NavHeader @foldChange="foldChange" />
        </ElHeader>
        <ElMain class="page-content">Main</ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-content {
    height: 100%;
    .main-aside {
      background-color: #041225;
    }
    .page-all {
      .page-header {
        display: flex;
        align-items: center;
      }
      .page-content {
        display: flex;
        justify-content: center;
        background-color: #f1f0f5;
      }
    }
  }
}

</style>
