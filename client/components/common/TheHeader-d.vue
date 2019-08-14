<template lang="pug">
  header.f-header
    .f-header-inner
      nuxt-link(to="/")
        img.f-header-logo(:src="logo")
      nav.f-header-nav
        ul
          li(
            v-for="routeItem in $options.routes"
            :key="routeItem.title")
            nuxt-link(:to="routeItem.route") {{ routeItem.title }}
          button.f-header-login(@click="$emit('login')") 登录
</template>
<script>
export default {
  name: 'Header',
  props: {
    logo: {
      type: String,
      default: 'https://static.famaomao.com/static/homepage_pc/images/logo.png'
    }
  },
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
.f-header {
  width: 100%;
  height: 70px;
  background-color: #FFF;
  border-bottom: 1px solid #EEE;
  .f-header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    img {
      height: 40px;
    }
    li {
      display: inline-block;
    }
    li + li {
      margin-left: 50px;
    }
    .f-header-login {
      margin-left: 50px;
      height: 30px;
      border: none;
      border-radius: 2px;
      background-color: #ff9800;
      color: #fff;
      outline: none;
      padding: 0 20px;
      cursor: pointer;
    }
  }
}
</style>
