<template>
  <v-table
    is-horizontal-resize
    column-width-drag
    :multiple-sort="false"
    style="width: 100%; margin: 50px 0"
    :columns="columns"
    :table-data="filteredAndSortedTableData"
    @sort-change="sortChange"
    :column-cell-class-name="columnCellClass"
  ></v-table>
</template>

<script>
import _ from "lodash";
import Vue from "vue";
import dataDummy from "@/dataDummy";
import CheckBox from "@/components/customCells/CheckBox";
import Actions from "@/components/customCells/Actions";
import Text from "@/components/customCells/Text";
import { EventBus } from "@/eventBus";
import { mapState } from "vuex";

export default {
  data() {
    return {
      columns: [],
      search: "",
      sort: {
        name: "",
        username: ""
      }
    };
  },
  methods: {
    columnCellClass(rowIndex, columnName) {
      let result = "";
      if (columnName === "username" || columnName === "name") {
        result += " row-modal";
      }
      if (rowIndex % 2 !== 0) {
        result += " column-odd";
      } else {
        result += " column-even";
      }
      return result;
    },
    setData() {
      this.$store.commit("SET_DATA", dataDummy);
      this.$store.dispatch("index/setIndex", dataDummy.tableData);
      this.columns = dataDummy.columns;
    },
    sortChange({ name, username }) {
      this.sort = {
        name,
        username
      };
    },
    sorting(arr) {
      const field = this.sort.name ? "name" : "username";
      let index = this.index;
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (this.sort[field] === "asc" && arr[i][field] > arr[j][field]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            [index[i], index[j]] = [index[j], index[i]];
          } else if (
            this.sort[field] === "desc" &&
            arr[i][field] < arr[j][field]
          ) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            [index[i], index[j]] = [index[j], index[i]];
          }
        }
      }
      this.$store.commit("index/SET_INDEX", index);
      return arr;
    },
    filtering() {
      const self = this;
      const filteredIndex = [];
      let filtered = self.tableData.filter((data, i) => {
        const toFilter =
          _.includes(data.name.toLowerCase(), self.search.toLowerCase()) ||
          _.includes(data.username.toLowerCase(), self.search.toLowerCase());
        toFilter && filteredIndex.push(i);
        return toFilter;
      });
      this.$store.commit("index/SET_INDEX", filteredIndex);
      return filtered;
    }
  },
  computed: {
    ...mapState("index", {
      index: state => state.index
    }),
    tableData() {
      return this.$store.state.data.tableData;
    },
    filteredAndSortedTableData() {
      let filter = this.filtering();
      return this.sorting(filter);
    }
  },
  created() {
    this.setData();
  },
  mounted() {
    EventBus.$on("filter", payload => {
      this.search = payload;
    });
  }
};

Vue.component("checkbox", CheckBox);
Vue.component("actions", Actions);
Vue.component("other", Text);
</script>

<style>
.v-table-header-inner {
  background-color: rgb(0, 132, 255);
  color: #f2f2f2;
  font-weight: bolder;
}

.column-select {
  background-color: rgb(151, 150, 150);
}

.column-odd {
  background-color: #edf7ff;
}

.row-modal {
  text-align: center;
}

.row-modal:hover {
  cursor: pointer;
}
</style>
