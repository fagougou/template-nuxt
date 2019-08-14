import axios from '../js/axiosWrap'

// 通过store commit实现统一错误处理
function handleError (msg) {
  if (window) {
    const store = window.$nuxt.$store

    store.commit('setErrMsg', msg)
  }
}

// demo
export function test (params) {
  return axios.post('test', params)
    .then(response => response)
    .catch(err => handleError(err.response.data.message))
}
