export default {
  state () {
    return {
      name: 'Arsen'
    }
  },
  mutations: {
    setName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    saveName({ commit }, data) {
      commit('setName', data)
    }
  },
  getters: { }
}