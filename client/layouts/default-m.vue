<template>
  <div>
    <FHead />
    <nuxt />
    <FFooter />
  </div>
</template>

<script>
import FHead from '@/components/layouts/FHead-m.vue'
import FFooter from '@/components/layouts/FFooter-m.vue'

export default {
  name: 'Default',
  components: {
    FHead,
    FFooter
  },
  computed: {
    errMsg () {
      return this.$store.state.errMsg
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

<style>
</style>
