<template>
  <div>
    <FHead />
    <nuxt />
    <FFooter />
  </div>
</template>

<script>
import FHead from '@/components/layouts/FHead-d.vue'
import FFooter from '@/components/layouts/FFooter-d.vue'

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
      this.$message.error(val)
    }
  }
}
</script>

<style>
</style>
