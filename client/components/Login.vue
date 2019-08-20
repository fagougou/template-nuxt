<template lang="pug">
  FMask(:isMaskShow="loginShow" @on-close="$emit('update:loginShow')")
    FCard(@on-close="$emit('update:loginShow')")
      template(#content)
        p.title 登录
        form.form
          .input-item
            input(
              v-model.trim="form.phone"
              type="tel"
              placeholder="电话号码")
          .input-item
            input.verification-input(
              v-model.trim="form.code"
              type="number"
              placeholder="验证码")
            VerificationCode(:phone="form.phone")
          button.submit-btn(@click.prevent="submit") 登录
</template>
<script>
import FMask from '@/components/common/FMask'
import FCard from '@/components/common/FCard'
import VerificationCode from '@/components/common/VerificationCode'

export default {
  name: 'Login',
  components: {
    FMask,
    FCard,
    VerificationCode
  },
  props: {
    loginShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {
    submit () {}
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 14px;
  padding: 0 20px 20px 20px;
  font-size: 22px;
  color: #333;
  font-weight: 700;
  text-align: center;
}
.form {
  @include flex-c-r;
  flex-direction: column;
  .input-item {
    position: relative;
    margin: 0 0 30px;
    height: 40px;
    line-height: 36px;
    input {
      margin: 0;
      padding: 0 .875rem;
      width: 330px;
      height: 40px;
      border: thin solid #ddd;
      border-radius: 2px;
      outline: none;
      transition: border-color .3s ease;
      box-shadow: inset 0 2px 4px 0 rgba(0,0,0,.08);
      font-size: 14px;
      box-sizing: border-box;
      &:hover {
        border-color: #929292;
      }
      &:focus {
        border-color: $color-primary
      }
    }
    input.verification-input {
      padding-right: 110px;
    }
    /deep/ .verification-code {
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -8px;
        width: 1px;
        height: 16px;
        background: #d8d8d8;
      }
    }
  }
  .submit-btn {
    margin: 0;
    width: 330px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #ff9800;
    color: #fff;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
    &[disabled] {
      background-color: #ddd!important;
      cursor: not-allowed;
    }
  }
}
</style>
