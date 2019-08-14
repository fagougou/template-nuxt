<template lang="pug">
  .f-title
    img.f-title-icon(v-if="preIcon" :src="preIcon")
    h2(:class="{'special-title': isSpecial}") {{ title }}
</template>
<script>
export default {
  name: 'FTitle',
  props: {
    preIcon: {
      type: String,
      default: ''
    },
    isSpecial: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '特殊标题'
    }
  }
}
</script>
<style lang="scss" scoped>
.f-title {
  @include flex-c-r;
  .f-title-icon {
    width: 33px;
    height: 33px;
    margin-right: 10px;
  }
  h2 {
    position: relative;
    display: inline-block;
  }
  .special-title {
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      width: 5px;
      height: 100%;
      background-color: $color-primary;
    }
  }
}
</style>
