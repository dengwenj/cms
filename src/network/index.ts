import DWJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const dwjRequest = new DWJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default dwjRequest
