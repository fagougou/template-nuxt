<template lang="pug">
  footer.f-footer
    nav.f-footer-nav
      ul
        li(
          v-for="routeItem in $options.routes"
          :key="routeItem.title")
          nuxt-link(:to="routeItem.route") {{ routeItem.title }}
    .f-footer-copyright
      p
        | Copyright © 2016-2019 法狗狗（深圳）科技有限公司版权所有
        a(href='http://www.miitbeian.gov.cn/', target='_blank')
          | 粤ICP备18024082号-2
</template>
<script>
export default {
  name: 'FFooter',
  routes: [
    {
      title: '页面一',
      route: '/'
    },
    {
      title: '页面二',
      route: '/'
    },
    {
      title: '页面三',
      route: '/'
    },
    {
      title: '页面四',
      route: '/'
    }
  ]
}
</script>
<style lang="scss" scoped>
.f-footer {
  font-size: 14px;
  overflow: hidden;
  color: #fff;
  background-color: #282828;
  .f-footer-nav {
    width: 80%;
    padding: 20px 0;
    margin: 0 auto;
    li {
      display: inline-block;
    }
    a {
      color: #fff;
    }
    li + li {
      margin-left: 50px;
    }
  }
  .f-footer-copyright {
    font-size: 12px;
    text-align: center;
    padding: 16px 0;
    color: #fff;
    background-color: #181818;
    a {
      margin-left: 10px;
      color: #fff;
    }
  }
}
</style>
