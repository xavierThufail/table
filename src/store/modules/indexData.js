const indexData = {
  namespaced: true,
  state: {
    index: [],
    computedIndex: []
  },
  mutations: {
    SET_INDEX(state, payload) {
      state.index = payload;
    }
  },
  actions: {
    setIndex({ commit }, data) {
      const indexData = [];
      data.forEach((_, i) => indexData.push(i));
      commit("SET_INDEX", indexData);
    }
  },
  getters: {
    getIndex: state => i => {
      return state.index[i];
    }
  }
};

export default indexData;
