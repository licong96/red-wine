import * as types from './mutations-type'

const matutaions = {
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_ALERT](state, alert) {
    state.alert = alert
  }
}

export default matutaions
