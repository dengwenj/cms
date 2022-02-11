<script lang="ts" setup>
import { ref } from 'vue'
import { ElTabs, ElTabPane, ElIcon, ElCheckbox, ElLink, ElButton } from 'element-plus'
import { Cellphone, User } from '@element-plus/icons-vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

const isKeepPassword = ref(true)
// 获取子组件实例  (InstanceType<typeof LoginAccount> 可以拿到组件实例的类型)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
// 获取子组件实例 phone 子组件
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
// 当前是账号登录还是手机登录
const currentValue = ref('account')


// 点击登录
const handleLogin = () => {
  if (currentValue.value === 'account') {
    accountRef.value?.accountLoginAction(isKeepPassword.value)
  } else if (currentValue.value === 'phone') {
    phoneRef.value?.phoneLoginAction()
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">CMS</h1>
    <ElTabs type="border-card" stretch v-model="currentValue" >
      <ElTabPane name="account">
        <!-- 这个是插槽 <template #label> -->
        <template #label>
          <span class="header">
            <ElIcon><user /></ElIcon>
            <span :style="{ marginLeft: '5px' }">账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </ElTabPane>
      <ElTabPane name="phone">
        <template #label>
          <span class="header">
            <ElIcon><cellphone /></ElIcon>
            <span :style="{ marginLeft: '5px' }">手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </ElTabPane>
    </ElTabs>

    <div class="footer">
      <ElCheckbox v-model="isKeepPassword" style="color: #5a9cf8;">记住密码</ElCheckbox>
      <ElLink type='primary'>忘记密码</ElLink>
    </div>

    <ElButton style="width: 100%;" type='primary' @click="handleLogin">立即登录</ElButton>
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
  .footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
