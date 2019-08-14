<template lang="pug">
  .login-page
    .title
      p 登录
    form
      .phone
        input(
          v-model="form.phone"
          maxlength="11"
          type="tel"
          placeholder="手机号码")
      .verification
        input(
          v-model="form.code"
          maxlength="4"
          type="nummber"
          placeholder="验证码")
        .send-verification-code
          VerificationCode(
            :phone="form.phone"
            @code="val => form.code = val")
      button(
        :disabled="submitDisabled"
        @click.prevent="submit") 立即登录
</template>
<script>
import VerificationCode from '@/components/common/VerificationCode'

export default {
  name: 'Login',
  components: {
    VerificationCode
  },
  data () {
    return {
      form: {
        phone: '',
        code: ''
      },
      submitDisabled: false
    }
  },
  methods: {
    submit () {}
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  padding: 30px 5.3vw;
  .title {
    font-size: p2v(40px);
  }
  form {
    margin-top: 5.3vw;
    .phone, .verification {
      display: flex;
      margin-bottom: 3.125vw;
      height: 10.94vw;
      background-color: #f5f5f5;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 6.25vw;
        height: 6.25vw;
        left: 3.125vw;
        top: 2.34vw;
        background-size: contain;
      }
    }
    input {
      padding-left: 12.5vw;
      width: 100%;
      height: 100%;
      color: #333;
      font-size: 4.69vw;
      border: none;
      border-radius: .625vw;
      box-sizing: border-box;
      background-color: transparent;
      &:focus {
        outline: none;
      }
    }
    .phone {
      &::before {
        background-image: url(https://static.famaomao.com/static/homepage_mobile/images/username.png);
      }
    }
    .verification {
      &::before {
        background-image: url(https://static.famaomao.com/static/homepage_mobile/images/suo.png);
      }
    }
    button {
      width: 100%;
      height: 10.94vw;
      line-height: 10.94vw;
      font-size: 16px;
      background: $color-primary;
      border-radius: .625vw;
      border: none;
      color: #fff;
      margin-top: 20px;
      &:focus {
        outline: none;
      }
      &[disabled] {
        background-color: rgba(255,153,0,.5);
        cursor: not-allowed;
        opacity: .5;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
