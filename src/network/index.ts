import DWJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const dwjRequest = new DWJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch(error) {
      return error
    },
    responseInterceptor(response) {
      return response
    },
    responseInterceptorCatch(error) {
      return error
    }
  }
})

export default dwjRequest
