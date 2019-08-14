<template lang="pug">
  .f-card(:style="`width: ${width}; height: ${height}`")
    i.close(v-if="isClose" @click="$emit('on-close')")
    slot(name="content")
      .content
        img(:src="icon")
        p {{ title }}
        span {{ text }}
        button(
          v-if="isButtonShow"
          @click="$emit('on-success')") {{ buttonText }}
</template>

<script>
export default {
  name: 'FCard',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    isClose: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'https://static.famaomao.com/static/homepage_mobile/images/success.png'
    },
    title: {
      type: String,
      default: '标题'
    },
    text: {
      type: String,
      default: '文本内容'
    },
    isButtonShow: {
      type: Boolean,
      default: true
    },
    buttonText: {
      type: String,
      default: '按钮文本'
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .f-card {
    position: relative;
    padding: 40px 45px;
    background-color: #fff;
    color: #333;
    border-radius: 2px;
    .close {
      position: absolute;
      right: -0.9em;
      top: -0.9em;
      width: 2.75rem;
      font-size: 1.5rem;
      font-weight: 200;
      height: 2.75rem;
      cursor: pointer;
      background: url(https://static.famaomao.com/static/homepage_pc/images/close.png)
        no-repeat;
      background-size: contain;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 24.375vw;
      }
      p {
        font-size: 5.3125vw;
        color: #333;
        line-height: 5.3125vw;
        margin: 4.69vw 0 3.125vw;
      }
      span {
        display: inline-block;
        text-align: center;
        font-size: 3.75vw;
        color: #999;
        line-height: 20px;
      }
      button {
        @include button-primary;
        @include flex-c-r;
        width: 300px;
        height: 40px;
        margin-top: 24px;
        font-size: 18px;
      }
    }
  }
}
@media screen and (min-width: 500px) {
  .f-card {
    position: relative;
    padding: 40px 45px;
    background-color: #fff;
    color: #333;
    border-radius: 2px;
    .close {
      position: absolute;
      right: -0.9em;
      top: -0.9em;
      width: 2.75rem;
      font-size: 1.5rem;
      font-weight: 200;
      height: 2.75rem;
      cursor: pointer;
      background: url(https://static.famaomao.com/static/homepage_pc/images/close.png)
        no-repeat;
      background-size: contain;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 85px;
        margin-bottom: 20px;
      }
      p {
        font-size: 22px;
        color: #333;
        line-height: 22px;
        margin-bottom: 10px;
      }
      span {
        display: inline-block;
        text-align: center;
        font-size: 14px;
        color: #999;
        line-height: 20px;
      }
      button {
        @include button-primary;
        @include flex-c-r;
        width: 300px;
        height: 40px;
        margin-top: 24px;
        font-size: 18px;
      }
    }
  }
}
</style>
