import axios from 'axios'
import config from '../../../nuxt.config'

const { port } = config.server

const devBaseURL = `http://localhost:${port}/api/`
const prodBaseURL = process.client ? '/api/' : `http://localhost:${port}/api/`

const axiosWrap = axios.create({
  timeout: 60000,
  withCredentials: true,
  // Nuxt command set NODE_ENV === 'development' by default
  baseURL: (process.env.NODE_ENV === 'development') ? devBaseURL : prodBaseURL
})

axiosWrap.interceptors.response.use(
  response => {
    return (response && response.data && response.data.data) ||
      response.data ||
      response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosWrap
