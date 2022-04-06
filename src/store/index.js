import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positionData: [],
    orderData: [],
    tradeData: [],
    balance: 0,
  },
  mutations: {
    updatePosition(state, positionInfo){
      state.positionData = positionInfo;
    },
    updateOrder(state, orderInfo){
      state.orderData = orderInfo;
    },
    updateTrade(state, tradeInfo){
      state.tradeData = tradeInfo;
    },
    updateBalance(state, balance){
      state.balance = balance;
    }
  },
  //async operation (optional)
  actions: {
  },
  // similar as state (optional)
  modules: {
  }
})
