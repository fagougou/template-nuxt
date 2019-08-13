import axios from 'axios'

const devBaseURL = 'http://localhost:9666/api/'
const prodBaseURL = process.client ? '/api/' : 'http://localhost:9666/api/'

const defaultAxios = axios.create({
  timeout: 60000,
  withCredentials: true,
  baseURL: (process.env.NODE_ENV === 'development') ? devBaseURL : prodBaseURL
})

defaultAxios.interceptors.response.use(
  response => {
    return (response && response.data && response.data.data)
      || response.data
      || response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default defaultAxios