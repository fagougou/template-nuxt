export const state = () => ({
  errMsg: '',
  ua: {
    view: null, // m (mobile), d (desktop)
    browser: null, // wx (wechat), uc
    os: null // ios, android
  },
  env: null, // dev, beta, staging, official
  baseUrl: {
    m: null,
    d: null
  }
})

export const mutations = {
  setErrMsg (state, msg) {
    state.errMsg = msg
  },
  setUserAgent (state, ua) {
    state.ua = ua
  },
  setEnv (state, env) {
    state.env = env
  },
  setBaseUrl (state, url) {
    state.baseUrl = url
  }
}
