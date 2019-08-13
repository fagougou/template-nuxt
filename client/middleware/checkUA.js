export default function (ctx) {
  const { req, store } = ctx

  if (req) {
    let isMobile
    const obj = {
      view: null,
      browser: null,
      os: null
    }
    const ua = req.headers[ 'user-agent' ].toLowerCase()

    if (/mobile/i.test(ua)) {
      isMobile = true
      obj.view = 'm'
    } else {
      isMobile = false
      obj.view = 'd'
    }

    if (/ucbrowser/i.test(ua)) {
      obj.browser = 'uc'
    } else if (/micromessenger/.test(ua)) {
      obj.browser = 'wx'
    }

    if (/iphone|ipad|ipod/.test(ua)) {
      obj.os = 'ios'
    } else if (/android/.test(ua)) {
      obj.os = 'android'
    }

    store.commit('setUserAgent', obj)
    ctx.isMobile = isMobile
  }
}
