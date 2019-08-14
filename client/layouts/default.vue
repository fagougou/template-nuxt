<template lang="pug">
  .wrap
    component(
      :is="Header"
      @login="loginShow=true")
    nuxt.container
    component(:is="Footer")
    Login(v-if="loginShow" @on-close="loginShow=false")
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'DefaultLayout',
  components: {
    Login
  },
  data () {
    return {
      loginShow: false
    }
  },
  computed: {
    errMsg () {
      return this.$store.state.errMsg
    },
    Header () {
      return () => import(`@/components/common/TheHeader-${this.$store.state.ua.view}`)
    },
    Footer () {
      return () => import(`@/components/common/TheFooter-${this.$store.state.ua.view}`)
    }
  },
  watch: {
    errMsg (val) {
      // 可以换成对应移动端的UI框架的提示组件
      this.$message.error(val)
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  background-color: #FFF;
}
</style>
