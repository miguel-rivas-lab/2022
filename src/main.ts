import Vue from 'vue';
import app from './app.vue';
import router from './modules/router';
import { store } from './modules/store';
import './stylesheets/application.scss';
import './modules/commons';
import "nano-grid/modules/tooltip";
import {
  formatRawDBToJSON,
  formatRawDBToFirebase,
  formatGroupsToProjects,
} from "./modules/format-db";
import * as VueThreejs from 'vue-threejs';
import "highlight.js/styles/tomorrow-night-bright.css";
import './modules/google-maps';
import axios from "axios";
//-- db
import { projectsDB } from "./db/projects";
import { groupsDB } from "./db/groups";
import { users } from "./db/users";
//-- firebase
import { firestorePlugin } from 'vuefire';
import { analytics } from 'firebase/app';
import 'firebase/analytics';
import { firebaseApp } from "./modules/firebase";

// ---------------- Selection

store.commit("addColumn",
  {
    mode: "Percent",
    size: "100%",
    subtraction: "100",
    color: "silver",
    expression: "sz1b4m100",
    block: "column",
  }
);

store.commit("addColumn",
  {
    mode: "Fixed",
    size: "100",
    subtraction: "0",
    color: "cod-grey",
    expression: "sz100",
    block: "column",
  },
);

analytics(firebaseApp);

Vue.prototype.$axios = axios;
Vue.use(firestorePlugin);
Vue.config.productionTip = false;
Vue.use(VueThreejs);

new Vue({
  router,
  store,
  data: () => ({
    user: users,
    projects: formatRawDBToJSON(projectsDB.map(formatRawDBToFirebase)),
    groups: formatGroupsToProjects(groupsDB),
  }),
  render: h => h(app)
}).$mount('#app');
