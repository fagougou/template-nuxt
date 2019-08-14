<template lang="pug">
  transition-group(name='slide-right')
    nav.nav-container(v-show='show' key='nav')
      .fmm-header-nav-close
        img.fmm-header-nav-icon.fmm-header-nav-icon-close(
          src='http://web-assets-1254426977.file.myqcloud.com/famaomao/homepage_mobile/images/v1.0.0/v1.0.0.nav-close.png'
          alt='侧边栏关闭按钮'
          @click="$emit('update:show', false)"
        )
      nuxt-link(
        v-for='(item, index) in navList'
        :key='index'
        :to='item.route'
        :class="item.active === true ? 'fmm-header-nav-item-active' : 'fmm-header-nav-item'"
        @click="$emit('update:show', false)"
      )
        img.fmm-header-nav-icon(:src='item.active === true ? item.activeSrc : item.src' :alt='item.alt')
        span {{ item.title }}
        i.fmm-icon.fmm-icon--arrowright.fmm-header-nav-arrow
      button.fmm-header-nav-button(v-if='!$store.state.userId' name='侧边栏-立即登录' @click="$router.push('/login')")
        | &#x7ACB;&#x5373;&#x767B;&#x5F55;
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
.nav-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 65.6vw;
  height: 100%;
  z-index: 1200;
  text-align: center;
  background-color: rgba(29, 30, 31, 0.98);
  .fmm-header-nav-close {
    padding: 5px 4vw 0 8vw;
    box-sizing: border-box;
    height: 12.5vw;
    text-align: right;
  }
  .fmm-header-nav-item {
    span {
      display: inline-block;
      color: #fff;
      margin-left: 4vw;
    }
  }
  .fmm-header-nav-item, .fmm-header-nav-item-active {
    display: flex;
    position: relative;
    align-items: center;
    padding-left: 8vw;
    padding-right: 4vw;
    height: 60px;
    font-size: 16px;
    color: #ffffff;
    line-height: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05)
  }
  .fmm-header-nav-item-active {
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
  .fmm-header-nav-icon {
    width: 5.86vw;
  }
  .fmm-header-nav-icon-close {
    width: 4.86vw;
  }
  .fmm-header-nav-arrow {
    position: absolute;
    right: 5.3vw;
    width: 1.46vw;
    height: 2.6vw;
    text-align: right;
  }
  .fmm-header-nav-button {
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
  .fmm-header-nav {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .fmm-icon--arrowright {
    display: inline-block;
    vertical-align: top;
    height: 3.125vw;
    width: 1.71vw;
  }
}
.nav-mask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  width: 100vw;
  height: 100%;
}
</style>
