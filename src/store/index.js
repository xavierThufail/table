import Vue from "vue";
import Vuex from "vuex";

import index from "@/store/modules/indexData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      tableData: [],
      columns: []
    }
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    EDIT_TABLEDATA(state, payload) {
      state.data.tableData = payload;
    }
  },
  actions: {
    editData({ commit, state }, payload) {
      const { index, checkBox, name, username, address, actions } = payload;
      const tableData = state.data.tableData.map((data, i) => {
        return i === Number(index)
          ? { checkBox, name, username, address, actions }
          : data;
      });
      commit("EDIT_TABLEDATA", tableData);
    },
    deleteData({ commit, state }, index) {
      let tableData = state.data.tableData;
      tableData = tableData.filter((_, i) => i !== index);
      commit("EDIT_TABLEDATA", tableData);
    }
  },
  modules: {
    index
  }
});
