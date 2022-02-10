import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface DWJRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface DWJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DWJRequestInterceptors<T>
  showLoading?: boolean
}
