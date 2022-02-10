import axios from "axios"
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'

import { DWJRequestConfig, DWJRequestInterceptors } from './types'

const DEFAULT_LOADING = true

class DWJRequest {
  instance: AxiosInstance
  interceptors?: DWJRequestInterceptors
  loading?: {
    close: () => void
  }
  isLoading: boolean

  constructor(config: DWJRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isLoading = config.showLoading ?? DEFAULT_LOADING // 没有传的话默认就是要 loading true

    // 从 config 中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use((config) => {
      if (this.isLoading) {
        // loading
        this.loading = ElLoading.service({
          lock: true,
          text: '正在请求数据...',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }

      return config
    }, (error) => {
      return error
    })
    this.instance.interceptors.response.use((response) => {
      // 响应成功关闭 loading
      this.loading?.close()

      const data = response.data
      if (data.returnCode === '-1001') {
        console.log('请求失败')
        return
      }
      return data
    }, (error) => {
      // 响应失败也要关闭 loading
      this.loading?.close()

      // 判断不同的 httpErrorCode 显示不同的错误信息
      if (error.response.status === '404') {
        console.log('404')
      }
      return error
    })
  }

  request(config: DWJRequestConfig) {
    // 单个的请求拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    if (config.showLoading === false) {
      this.isLoading = false
    }

    this.instance.request(config).then((res) => {
      // 单个的响应拦截
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)

      // 将 isLoading 设置为 true， 这样不会影响下一个请求
      this.isLoading = DEFAULT_LOADING
    }).catch((err) => {
      this.isLoading = DEFAULT_LOADING
      return err
    })
  }
}

export default DWJRequest
