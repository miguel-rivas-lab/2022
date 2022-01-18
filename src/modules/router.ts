import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import { firebaseApp } from "./firebase";
import "firebase/auth";

import ColorsPanelView from '../views/colors-panel.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';
import CubeWorkareaView from '../views/cube-workarea.vue';
import CubePanelView from '../views/cube-panel.vue';
import GridWorkareaView from '../views/grid-workarea.vue';
import GridPanelView from '../views/grid-panel.vue';
import HomeWorkareaView from '../views/home-workarea.vue';
import HomePanelView from '../views/home-panel.vue';
import ProjectsWorkareaView from '../views/projects-workarea.vue';
import ProjectsPanelView from '../views/projects-panel.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';
import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';
import LocationsPanelView from '../views/locations-panel.vue';
import LocationsWorkareaView from '../views/locations-workarea.vue';
import CryptoWorkareaView from '../views/crypto-workarea.vue';

import Login from '../views/login-workarea.vue';

import DefaultPanelView from '../views/default-panel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    components: {
      workarea: HomeWorkareaView,
      panel: HomePanelView,
    },
  },
  {
    name: 'projects',
    path: '/projects',
    components: {
      workarea: ProjectsWorkareaView,
      panel: ProjectsPanelView,
    },
  },
  {
    name: 'colors',
    path: '/colors',
    components: {
      workarea: ColorsWorkareaView,
      panel: ColorsPanelView,
    },
  },
  {
    name: 'cube',
    path: '/cube',
    components: {
      workarea: CubeWorkareaView,
      panel: CubePanelView,
    },
  },
  {
    name: 'crypto',
    path: '/crypto',
    components: {
      workarea: CryptoWorkareaView,
      panel: DefaultPanelView,
    },
    meta: { requiresAuth: true }
  },
  {
    name: 'login',
    path: '/login',
    components: {
      workarea: Login,
      panel: DefaultPanelView,
    },
  },
  {
    name: 'statistics',
    path: '/statistics',
    components: {
      workarea: StatisticsWorkareaView,
      panel: DefaultPanelView,
    },
  },
  {
    name: 'grid',
    path: '/grid',
    components: {
      workarea: GridWorkareaView,
      panel: GridPanelView,
    },
  },
  {
    name: 'gear',
    path: '/gear',
    components: {
      workarea: GearWorkareaView,
      panel: GearPanelView,
    },
  },
  {
    name: 'locations',
    path: '/locations',
    components: {
      workarea: LocationsWorkareaView,
      panel: LocationsPanelView,
    },
  },
  {
    name: 'wheel',
    path: '/wheel',
    components: {
      workarea: WheelWorkareaView,
      panel: WheelPanelView,
    },
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebaseApp.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;