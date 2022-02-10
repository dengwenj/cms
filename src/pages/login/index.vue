<script setup lang="ts">
import LoginPanel from './components/login-panel.vue'
</script>

<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url(../../assets/img/jiankang.png) no-repeat;
  background-size: cover;
}
</style>
