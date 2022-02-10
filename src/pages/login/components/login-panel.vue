<script lang="ts" setup>
import { ElTabs, ElTabPane, ElIcon } from 'element-plus'
import { Cellphone, User } from '@element-plus/icons-vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
</script>

<template>
  <div class="login-panel">
    <h1 class="title">CMS</h1>
    <ElTabs type="border-card" stretch>
      <ElTabPane>
        <!-- 这个是插槽 <template #label> -->
        <template #label>
          <span class="header">
            <ElIcon><user /></ElIcon>
            <span :style="{ marginLeft: '5px' }">账号登录</span>
          </span>
        </template>
        <LoginAccount />
      </ElTabPane>
      <ElTabPane>
        <template #label>
          <span class="header">
            <ElIcon><cellphone /></ElIcon>
            <span :style="{ marginLeft: '5px' }">手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .header {
    display: flex;
    align-items: center;
  }
}
</style>
