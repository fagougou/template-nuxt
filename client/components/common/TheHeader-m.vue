<template lang="pug">
  div
    header
      nuxt-link(to="/")
        img(src="https://static.famaomao.com/static/homepage_pc/images/logo.png")
      nav(@click="navShow=true")
        img(src="@/assets/icon/menu.png")
    NavMenu(
      :show.sync="navShow"
      :navList="navList")
</template>
<script>
import NavMenu from '@/components/common/TheNav-m'

export default {
  name: 'Header',
  components: {
    NavMenu
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  },
  data () {
    return {
      navShow: false,
      navList: [
        {
          src: 'http://web-assets-1254426977.file.myqcloud.com/famaomao/homepage_mobile/images/v1.0.0/v1.0.0.nav-index.png',
          activeSrc: 'http://web-assets-1254426977.file.myqcloud.com/famaomao/homepage_mobile/images/v1.0.0/v1.0.0.nav-index-select.png',
          alt: '首页',
          route: '/',
          title: '首页',
          active: false
        },
        {
          src: 'http://web-assets-1254426977.file.myqcloud.com/famaomao/homepage_mobile/images/v1.0.0/v1.0.0.nav-freeConsult.png',
          activeSrc: 'http://web-assets-1254426977.file.myqcloud.com/famaomao/homepage_mobile/images/v1.0.0/v1.0.0.nav-freeConsult-select.png',
          alt: '关于我们',
          route: '/about',
          title: '关于我们',
          active: false
        }
      ]
    }
  },
  watch: {
    // 监听侧边导航栏活动路径
    currentPath: {
      handler (newVal) {
        this.navList.forEach((nav, index) => {
          if (nav.route === newVal) {
            this.$set(this.navList[index], 'active', true)
          } else {
            this.$set(this.navList[index], 'active', false)
          }
        })
      },
      immediate: true
    }
  }
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
