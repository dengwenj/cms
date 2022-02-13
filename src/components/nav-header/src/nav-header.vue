<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
} from 'element-plus'
import { DArrowLeft, DArrowRight, ArrowDown } from '@element-plus/icons-vue'

import DwjBreadcrumb from '@/allbase-components/breadcrumb'
import { useStore } from '@/store'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)
const store = useStore()
const userName = computed(() => store.state.login.userInfo.name)

// 面包屑数据
const breadcrumbs = computed(() => {
  const { path: currentPath } = useRoute()
  const userMenus = store.state.login.userMenus
  return pathMapBreadcrumbs(userMenus, currentPath)
})

const handlerClick = () => {
  isFold.value = !isFold.value
  // 传给父组件
  emit('foldChange', isFold.value)
}
</script>

<template>
  <div class="nav-header">
    <ElIcon style="cursor: pointer;" size="22px" @click="handlerClick">
      <template v-if="isFold"><DArrowRight /></template>
      <template v-else><DArrowLeft /></template>
    </ElIcon>
    <div class="qt">
      <div class="mbs">
        <DwjBreadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div class="user-info">
        <ElDropdown>
          <span class="el-dropdown-link">
            <ElAvatar
              size='small'
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></ElAvatar>
            {{ userName }}
            <ElIcon class="el-icon--right">
              <ArrowDown />
            </ElIcon>
          </span>
          <template #dropdown>
            <ElDropdownMenu>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </ElDropdownMenu>
          </template>
        </ElDropdown>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .qt {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    .user-info {
      cursor: pointer;
      .el-dropdown-link {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
