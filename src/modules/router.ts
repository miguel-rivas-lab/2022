import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import DefaultPanelView from '../views/default-panel.vue';

import GridWorkareaView from '../views/grid-workarea.vue';
import GridPanelView from '../views/grid-panel.vue';
import StargazeWorkareaView from '../views/stargaze-workarea.vue';
import StargazePanelView from '../views/stargaze-panel.vue';
import ColorsPanelView from '../views/colors-panel.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';

import CanvasRouter from '../router/canvas';
import CssRouter from '../router/css';
import ProjectsRouter from '../router/projects';
import ThreeRouter from '../router/three';
import GalleryRouter from '../router/gallery';
import UnityRouter from '../router/unity';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/stargaze',
  },
  {
    name: 'stargaze',
    path: '/stargaze',
    components: {
      workarea: StargazeWorkareaView,
      panel: StargazePanelView,
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
    name: 'grid',
    path: '/grid',
    components: {
      workarea: GridWorkareaView,
      panel: GridPanelView,
    },
  },
  {
    path: '*',
    redirect: '/'
  },

  /* ---------------------- nested ---------------------- */

  CanvasRouter,
  CssRouter,
  ProjectsRouter,  
  ThreeRouter,
  GalleryRouter,
  UnityRouter,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;