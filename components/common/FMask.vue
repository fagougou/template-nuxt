<template lang="pug">
  .f-mask(v-if="isMaskShow" @click="toggle")
    slot
</template>
<script>
export default {
  name: 'FMask',
  props: {
    isMaskShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  watch: {
    isMaskShow: {
      handler (val) {
        val
          ? document.getElementsByTagName('body')[0].style.overflow = 'hidden'
          : document.getElementsByTagName('body')[0].style.overflow = 'auto'
      }
    }
  },
  methods: {
    toggle () {
      this.$emit('on-close')
    }
  }
}
</script>
<style lang="scss" scoped>
.f-mask {
  @include flex-c-r;
  @include whole-fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
}
</style>
