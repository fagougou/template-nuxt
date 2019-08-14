<template lang="pug">
  div
    header
      nuxt-link(to="/")
        img(src="https://static.famaomao.com/static/homepage_pc/images/logo.png")
      nav(@click="navShow=true")
        img(src="@/assets/icon/menu.png")
    NavMenu(
      :show.sync="navShow"
      :navList="$options.navList"
    )
</template>
<script>
import NavMenu from '@/components/common/TheNav-m'

export default {
  name: 'Header',
  components: {
    NavMenu
  },
  data () {
    return {
      navShow: false
    }
  },
  navList: [
    {
      title: '页面一',
      route: '/'
    },
    {
      title: '页面二',
      route: '/'
    }
  ]
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: p2v(92px);
  background-color: #FFF;
  border-bottom: 1px solid #EEE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: p2v(10px) p2v(20px);
  a, img {
    height: 100%;
  }
  nav {
    height: 80%;
  }
}
</style>
