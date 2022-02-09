import axios from "axios"
import type { AxiosInstance } from 'axios'

import { DWJRequestConfig, DWJRequestInterceptors } from './types'

class DWJRequest {
  instance: AxiosInstance
  interceptors?: DWJRequestInterceptors

  constructor(config: DWJRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

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
      return config.data
    }, (error) => {
      return error
    })
    this.instance.interceptors.response.use((response) => {
      return response
    }, (error) => {
      return error
    })
  }

  request(config: DWJRequestConfig) {
    // 单个的请求拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      // 单个的响应拦截
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default DWJRequest
