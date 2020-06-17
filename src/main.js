import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import { VTable, VPagination } from "vue-easytable";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "vue-easytable/libs/themes-base/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
