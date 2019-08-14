<template lang="pug">
  transition-group(name="navbar-slide")
    nav.f-nav(v-show="show" key="nav")
      .f-nav-close
        img(
          src="http://web-assets-1254426977.file.myqcloud.com/famaomao/homepage_mobile/images/v1.0.0/v1.0.0.nav-close.png"
          alt="侧边栏关闭按钮"
          @click="$emit('update:show', false)")
      nuxt-link(
        v-for="(item, index) in navList"
        :key="index"
        :to="item.route"
        :class="item.active ? 'f-nav-route-active' : 'f-nav-route'"
        @click.native="$emit('update:show', false)")
        img.f-nav-icon(
          :src="item.active ? item.activeSrc : item.src"
          :alt="item.alt")
        span {{ item.title }}
        i.f-nav-arrow
      button.f-nav-button(
        v-if="!$store.state.userId"
        @click="$router.push('/login')") 立即登录
    .f-nav-mask(v-show="show" key="mask" @click="$emit('update:show', false)")
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    navList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.f-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 65.6vw;
  height: 100%;
  z-index: 20;
  text-align: center;
  background-color: rgba(29, 30, 31, .98);
  .f-nav-close {
    @include flex-e-r;
    padding: 5px 4vw 0 8vw;
    box-sizing: border-box;
    height: 12.5vw;
    text-align: right;
    img {
      width: 4.86vw;
    }
  }
  .f-nav-route, .f-nav-route-active {
    display: flex;
    position: relative;
    align-items: center;
    padding-left: 8vw;
    padding-right: 4vw;
    height: 60px;
    font-size: 16px;
    color: #ffffff;
    line-height: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    .f-nav-icon {
      width: 5.86vw;
    }
    .f-nav-arrow {
      position: absolute;
      display: inline-block;
      right: 5.3vw;
      vertical-align: top;
      height: 3.125vw;
      width: 1.71vw;
      background: url(https://static.famaomao.com/static/homepage_mobile/images/v2.4_arrow_left.png) no-repeat;
      background-size: contain;
    }
  }
  .f-nav-route {
    span {
      display: inline-block;
      margin-left: 4vw;
    }
  }
  .f-nav-route-active {
    span {
      display: inline-block;
      color: #FE8E21;
      margin-left: 4vw;
    }
    &::before {
      content: "";
      position: absolute;
      width: 0.8vw;
      height: 16px;
      left: 0;
      background-color: #FE8E21;
    }
  }
  .f-nav-button {
    width: 58.6vw;
    height: 40px;
    border: 1px solid #FE8E21;
    border-radius: 4px;
    font-size: 16px;
    color: #FE8E21;
    line-height: 16px;
    background-color: transparent;
    margin: auto;
    margin-top: 15px;
  }
}
.f-nav-mask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 15;
  width: 100vw;
  height: 100%;
}
.navbar-slide-enter-active,
.navbar-slide-leave-active {
  transition: all 0.3s;
}
.navbar-slide-enter,
.navbar-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
