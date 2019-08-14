<template lang="pug">
  .verification-code
    transition(name="fade")
      el-button.verification-btn(
        v-if="!loading"
        :disabled="state.disabled"
        @click.prevent="sendVerification") {{ state.title }}
        span(v-if="state.disabled") {{ seconds }}
</template>
<script>
export default {
  name: 'VerificationCode',
  props: {
    phone: {
      type: String,
      default: ''
    },
    validPhone: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      timeToSend: null,
      sended: false,
      seconds: 0,
      loading: false,
      state: {
        title: '获取验证码',
        disabled: false
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const pageInfoStr = localStorage.getItem('login-page')
      const pageInfo = pageInfoStr ? JSON.parse(pageInfoStr) : {}

      this.timeToSend = pageInfo.timeToSend
      const diff = Date.now() - new Date(pageInfo.timeToSend).getTime()

      if (!isNaN(diff) && diff < 60 * 1000 && diff > 0) {
        this.state.title = '秒后重发'
        this.state.disabled = true
        this.seconds = 60 - Number.parseInt(diff / 1000)
        this.setTimeoutTitle()
      }
    },
    async sendVerification () {
    },
    setTimeoutTitle () {
      if (this.seconds > 1) {
        this.seconds--
        setTimeout(() => {
          this.setTimeoutTitle()
        }, 1000)
      } else {
        this.state.title = '重新发送'
        this.state.disabled = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .verification-code {
    @include flex-c-r;
    height: 100%;
    /deep/ .verification-btn {
      height: 100%;
      color: #FE8E21;
      border: none;
      border-radius: 2px;
      font-size: 4.69vw;
      background-color: transparent;
      &[disabled] {
        color: #999;
      }
      &[active] {
        background-color: #ccc;
      }
    }
    /deep/ .el-icon-loading {
      position: absolute
    }
  }
}
@media screen and (min-width: 500px) {
  .verification-code {
    @include flex-c-r;
    height: 100%;
    /deep/ .verification-btn {
      height: 100%;
      color: #FE8E21;
      border: none;
      border-radius: 2px;
      font-size: 14px;
      background-color: transparent;
      &[disabled] {
        color: #999;
      }
      &[active] {
        background-color: #ccc;
      }
    }
    /deep/ .el-icon-loading {
      position: absolute
    }
  }
}

</style>
