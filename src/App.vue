<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
/**
 * element-plus 还搞国际化？ 真是老奶奶👵🏻钻被窝 ————给爷👴🏻整笑了
 */
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <div class="app">
    <ElConfigProvider :locale="zhCn">
      <router-view />
    </ElConfigProvider>
  </div>
</template>

<style lang="less" scoped>
.app {
  height: 100%;
}
</style>
