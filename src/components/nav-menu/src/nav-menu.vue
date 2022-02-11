<script lang="ts" setup>

</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.png" alt="logo">
      <span class="name">CMS</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-menu {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    img {
      width: 22px;
      height: 22px;
    }
    .name {
      margin-left: 5px;
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>
