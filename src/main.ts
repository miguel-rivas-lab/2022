import Vue from "vue";
import app from "./app.vue";
import router from "./modules/router";
import { store } from "./modules/store";
import "./stylesheets/application.scss";
import "./modules/commons";
import "./nano-grid-vue/modules/tooltip";
import "./nano-grid-vue/modules/nano";
import VueKonva from "vue-konva";

//-- db

import { user } from "./db/user";
import i18n from "./i18n";


// ---------------- Selection

store.commit("addColumn",
  {
    absoluteWidth: false,
    absoluteHeight: false,
    width: 0,
    height: 0,
    subtraction: 100,
    block: "column",
  }
);

Vue.use(VueKonva);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  data: () => ({
    user: user,
  }),
  render: h => h(app)
}).$mount('#app');
