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
import "highlight.js/styles/tomorrow-night-bright.css";
//-- db
import { projectsDB } from "./db/projects";
import { groupsDB } from "./db/groups";
import { users } from "./db/users";

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

Vue.config.productionTip = false;

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
