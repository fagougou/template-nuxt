export default function ({ req, store }) {
  // backend
  if (req) {
    const host = req.hostname || req.headers.host
    const index = host.indexOf('.')
    const subHost = (index >= 0) ? host.slice(0, index) : null

    let env = ''
    let baseUrl = {}

    // ************ 判断并设定环境 ***********
    // DEV环境
    if (!subHost || parseInt(subHost)) {
      // !subHost: 'localhost:9666', parseInt(subHost): '198.34.5.28'
      env = 'dev'
    }

    // BETA环境
    else if (subHost.includes('beta')) {
      env = 'beta'
    }

    // Staging环境
    else if (subHost.includes('staging')) {
      env = 'staging'
    }

    // Official环境
    else {
      env = 'official'
    }

    // ************* 设定baseUrl ************
    const urlMap = {
      desktop: {
        dev: 'http://localhost:9666',
        beta: 'https://beta.famaomao.com',
        staging: 'https://staging-www.famaomao.com',
        official: 'https://www.famaomao.com'
      },
      mobile: {
        dev: 'http://localhost:9666',
        beta: 'https://beta-m.famaomao.com',
        staging: 'https://staging-m.famaomao.com',
        official: 'https://m.famaomao.com'
      }
    }

    baseUrl = {
      m: urlMap[ 'mobile' ][ env ],
      d: urlMap[ 'desktop' ][ env ]
    }

    store.commit('setEnv', env)
    store.commit('setBaseUrl', baseUrl)
  }
}
