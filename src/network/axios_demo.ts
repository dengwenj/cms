import axios from "axios"


// Promise 本身是可以传入一个类型的，这个类型就是 resolve 参数的类型， 是 res 的类型是 string
new Promise<string>((resolve, reject) => {
  resolve('111')
}).then((res) => {
  console.log(res.length)
})

/**
 * 响应拦截器和请求拦截器
 */
// fn1 是请求发送成功执行的函数
// fn2 是请求发生失败执行的函数
axios.interceptors.request.use((config) => {
  return config // 必须返回 config
}, (config) => {

})

// fn1 是响应成功执行的函数
// fn2 是响应失败执行的函数
axios.interceptors.response.use((response) => {
  // 2xx 会执行这里
  return response
}, () => {
  // 不是 2xx 会执行这里
})
