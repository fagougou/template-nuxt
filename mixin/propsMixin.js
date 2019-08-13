const cardProps = {
  props: {
    isMaskShow: {
      type: Boolean,
      default: true
    },
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

export default cardProps
