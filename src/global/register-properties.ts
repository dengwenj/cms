import type { App } from "vue"

import formatUtcString from '@/utils/date-format'

export default function registerProperties(app: App) {
  // 全局属性
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
