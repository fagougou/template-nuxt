<template lang="pug">
  footer.f-footer
    nav.f-footer-nav
      nuxt-link(
        v-for="routeItem in $options.routes"
        :key="routeItem.title"
        :to="routeItem.route") {{ routeItem.title }}
    .f-footer-copyright
      p 粤ICP备18024082号-2
      p © 2016-2019 法狗狗（深圳）科技有限公司
</template>
<script>
export default {
  name: 'Footer',
  routes: [
    { title: '页面一', route: '/' },
    { title: '页面二', route: '/' },
    { title: '页面三', route: '/' },
    { title: '页面四', route: '/' }
  ]
}
</script>
<style lang="scss" scoped>
.f-footer {
  padding: p2v(60px) p2v(17.5px);
  background: #282828;
  color: hsla(0, 0%, 100%, .7);;
  text-align: center;
  .f-footer-nav {
    a {
      position: relative;
      color: #fff;
      font-size: 14px;
      line-height: 14px;
      opacity: .5;
    }
    a + a {
      margin-left: p2v(60px);
      &::before {
        position: absolute;
        content: "|";
        left: p2v(-32px);
        top: p2v(6px);
      }
    }
  }
  .f-footer-copyright {
    padding: p2v(70px) 0;
    font-size: p2v(33px);
    line-height: p2v(40px);
    transform: scale(.8);
    text-align: center;
    color: hsla(0,0%,100%,.5);
  }
}
</style>
