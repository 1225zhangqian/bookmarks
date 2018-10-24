import axios from 'axios'
import ApiUrl from './config.js'

// baseURL配置
const baseURL = process.env.NODE_ENV === 'development'
  ? ApiUrl
  : window.g.ApiUrl

// 创建axios实例
const service = axios.create({
  baseURL: baseURL
  // timeout: 30000 // 请求超时时间
})

service.defaults.headers = {
  // 'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json;charset=UTF-8' // 默认是此值, 部分接口是formdata或其他.
}

// request拦截器(可以定义请求携带token)
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // 异常统一处理
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
