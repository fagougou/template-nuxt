export const state = () => ({
  errMsg: ''
})

export const mutations = {
  setErrMsg (state, msg) {
    state.errMsg = msg
  }
}
