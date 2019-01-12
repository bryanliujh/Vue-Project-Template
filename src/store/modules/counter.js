const state = {
  counter: 0
}

const getters = {
  doubleCounter: state => {
    return state.counter * 2
  }
}

const mutations = {
  increment: state => {
    state.counter++
  },
  decrement: state => {
    state.counter--
  },
  incrementPayload: (state, payload) => {
    state.counter += payload.amount
  }
}

const actions = {
  asyncIncrement: ({ commit }) => {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
