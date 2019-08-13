<template lang="pug">
  .f-popup-card(v-if="isShow")
    FMask(:isMaskShow="isMaskShow")
      FCard
</template>
<script>
import FMask from './FMask.vue'
import FCard from './FCard.vue'
import propsMixin from '@/mixin/propsMixin'

export default {
  name: 'FPopupCard',
  components: {
    FMask,
    FCard
  },
  mixins: [propsMixin],
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  }
}
</script>
