const express = require('express')
const consola = require('consola')
const { Nuxt } = require('nuxt')
const app = express()
const config = require('../nuxt.config')
const isProd = process.env.NODE_ENV === 'production'

async function start () {
  const { host, port } = config.server

  // Use Nuxt as middleware in production
  if (isProd) {
    const nuxt = new Nuxt(config)

    await nuxt.ready()
    app.use(nuxt.render)
  }

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
