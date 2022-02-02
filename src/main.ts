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
import VueKonva from 'vue-konva';

import { secuences, statics } from "./db/gallery3d";

// ---------------- imgLoading

const projects = formatRawDBToJSON(projectsDB.map(formatRawDBToFirebase));
const imgs = {};

secuences.forEach(item => {
  imgs[item.name] = { path: [], obj: [] };
  for (let index = 1; index <= 8; index++) {
    imgs[item.name].path.push(`3dlib/${item.name}/000${index}.jpg`);
  }
});

statics.forEach(item => {
  imgs[item.name] = { path: [], obj: [] };
  imgs[item.name].path.push(`@/img/${item.name}`);
});

Object.values(imgs).forEach(item => {
  item.path.forEach(currentPath => {
    const temp = new window.Image();
    temp.src = currentPath;
    temp.onload = () => {
      item.obj.push(temp);
    };
  });
});

// console.log(imgs);

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

Vue.use(VueKonva);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: () => ({
    user: users,
    projects: projects,
    groups: formatGroupsToProjects(groupsDB),
    imgs: imgs,
  }),
  render: h => h(app)
}).$mount('#app');
