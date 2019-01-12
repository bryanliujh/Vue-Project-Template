import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
//no need curly braces for counter as export default

Vue.use(Vuex)

//mutations have to be synchronous cannot have set timeout (async) in it
export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters: {
    value: state => {
      return state.value
    }
  },
  mutations: {
    updateValue: (state, payload) => {
      state.value = payload
    }
  },
  modules: {
    counter
  }
})
