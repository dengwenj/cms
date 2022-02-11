<script lang="ts" setup>
import { ElMenu, ElSubMenu, ElIcon, ElMenuItemGroup, ElMenuItem } from 'element-plus'
import { Location, Document, Setting } from '@element-plus/icons-vue'

import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.png" alt="logo">
      <span class="name">CMS</span>
    </div>
    <div class="menu">
      <ElMenu
        default-active="2"
        class="el-menu-vertical-demo"
      >
      </ElMenu>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
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
  .menu {
    height: 100%;
    .el-menu-vertical-demo {
      height: 100%;
      width: 200px;
      background-color: #071224;
      border: 0;
    }
  }
}
</style>
