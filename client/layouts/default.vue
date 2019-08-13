<template lang="pug">
  .wrap
    component(:is="Header")
    nuxt.container
    component(:is="Footer")
</template>

<script>
export default {
  name: 'DefaultLayout',
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
