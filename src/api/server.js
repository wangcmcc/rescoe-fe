import axios from 'axios'
import { Loading } from 'element-ui'

let loadings
const options = {
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)'
}

export function createService (config) {
  // 创建一个axios实例
  const service = axios.create({
    baseURL: 'https://mock.mengxuegu.com/mock/64303af932affa39a121cf21',
    timeout: 5000
  })

  // 请求拦截
  service.interceptors.request.use(
    config => {
      loadings = Loading.service(options)
      // config.headers.Authorization = window.sessionStorage.getItem('token')
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    config => {
      loadings.close()
      return config
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )
  return service(config)
}
