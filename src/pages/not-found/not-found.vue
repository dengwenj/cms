<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'

const router = useRouter()

const handleGoHome = () => {
  router.replace('/main')
}
</script>

<template>
  <div class="not-found">
    <h2>Not Found.</h2>
    <h3 style="margin-bottom: 10px;">没有这个路径不要给我瞎输</h3>
    <ElButton type='text' @click="handleGoHome" style="font-size: 18px;">回到首页</ElButton>
  </div>
</template>

<style lang="less">
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
</style>
