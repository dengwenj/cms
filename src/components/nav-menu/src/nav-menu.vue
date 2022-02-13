<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMenu, ElSubMenu, ElIcon, ElMenuItem } from 'element-plus'
import { Location } from '@element-plus/icons-vue'

import { useStore } from '@/store'
import { pathMapToMenu } from '@/utils/map-menus'

import type { IUserMenus } from '@/utils/types'

// 父传子
defineProps({
  isCollapse: {
    type: Boolean
  }
})
const store= useStore()
const userMenus = computed(() => store.state.login.userMenus)

const router = useRouter()
const route = useRoute()
const currentPath = route.path

const menu = pathMapToMenu(userMenus.value, currentPath)

const defaultValue = ref(menu?.id + '')

const handleMenuClick = (menu: IUserMenus) => {
  router.push({
    path: menu.url ?? 'not-found'
  })
}
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.png" alt="logo">
      <span v-if="!isCollapse" class="name">CMS</span>
    </div>
    <div class="menu">
      <ElMenu
        class="el-menu-vertical-demo"
        active-text-color="#f8d264"
        background-color="#071224"
        text-color="#fff"
        :collapse="isCollapse"
        :default-active="defaultValue"
      >
        <template v-for="item in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <ElSubMenu :index="item.id + ''">
              <template #title>
                <ElIcon><Location /></ElIcon>
                <span style="color: #ccc">{{ item.name }}</span>
              </template>
              <template v-for="subMenu in item.children" :key="subMenu.id">
                <ElMenuItem
                  style="background-color: #04263f; padding-left: 55px;"
                  :index="subMenu.id + ''"
                  @click="handleMenuClick(subMenu)"
                >
                  {{ subMenu.name }}
                </ElMenuItem>
              </template>
            </ElSubMenu>
          </template>
          <template v-else-if="item.type === 2">
            <ElMenuItem :index="item.id + ''">{{ item.name }}</ElMenuItem>
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
      background-color: #081f31;
      border: 0;
    }
  }
}
</style>
