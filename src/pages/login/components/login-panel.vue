<script lang="ts" setup>
import { ElTabs, ElTabPane, ElIcon } from 'element-plus'
import { Cellphone, User } from '@element-plus/icons-vue'
</script>

<template>
  <div class="login-panel">
    <h1 class="title">CMS</h1>
    <ElTabs type="border-card" stretch>
      <ElTabPane>
        <template #label>
          <span class="header">
            <el-icon><user /></el-icon>
            <span :style="{ marginLeft: '5px' }">账号登录</span>
          </span>
        </template>
        账号登录
      </ElTabPane>
      <ElTabPane>
        <template #label>
          <span class="header">
            <el-icon><cellphone /></el-icon>
            <span :style="{ marginLeft: '5px' }">手机登录</span>
          </span>
        </template>
        手机登录
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .header {
    display: flex;
    align-items: center;
  }
}
</style>
