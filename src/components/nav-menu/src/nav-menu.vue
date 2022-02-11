<script lang="ts" setup>
import { computed } from 'vue'
import { ElMenu, ElSubMenu, ElIcon, ElMenuItem } from 'element-plus'
import { Location } from '@element-plus/icons-vue'

import { useStore } from '@/store'

const store= useStore()
const userMenus = computed(() => store.state.login.userMenus)
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.png" alt="logo">
      <span class="name">CMS</span>
    </div>
    <div class="menu">
      <ElMenu default-active="2" class="el-menu-vertical-demo" text-color="#ffffff" background-color="#071224">
        <template v-for="item in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <ElSubMenu :index="item.id">
              <template #title>
                <ElIcon><Location /></ElIcon>
                <span style="color: #ccc">{{ item.name }}</span>
              </template>
              <template v-for="subMenu in item.children" :key="subMenu.id">
                <ElMenuItem index="1-1">{{ subMenu.name }}</ElMenuItem>
              </template>
            </ElSubMenu>
          </template>
          <template v-else-if="item.type === 2">
            <ElMenuItem index="1-1">{{ item.name }}</ElMenuItem>
          </template>
        </template>
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
