<template lang="pug">
  .f-mask(v-if="isMaskShow" @click.self="$emit('on-close')")
    slot
</template>
<script>
export default {
  name: 'FMask',
  props: {
    isMaskShow: {
      type: Boolean,
      default: false
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
