import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import ColorsPanelView from '../views/colors-panel.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';
import CubeWorkareaView from '../views/cube-workarea.vue';
import CubePanelView from '../views/cube-panel.vue';
import GridWorkareaView from '../views/grid-workarea.vue';
import GridPanelView from '../views/grid-panel.vue';
import StargazeWorkareaView from '../views/stargaze-workarea.vue';
import StargazePanelView from '../views/stargaze-panel.vue';
import ProjectsWorkareaView from '../views/projects-workarea.vue';
import ProjectsPanelView from '../views/projects-panel.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';
import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';
import LocationsPanelView from '../views/locations-panel.vue';
import LocationsWorkareaView from '../views/locations-workarea.vue';
import MeshPanelView from '../views/mesh-panel.vue';
import MeshWorkareaView from '../views/mesh-workarea.vue';
import Projects3DWorkareaView from '../views/gallery-3d-workarea.vue';
import Projects3DPanelView from '../views/gallery-3d-panel.vue';
import ProjectsVideoWorkareaView from '../views/gallery-video-workarea.vue';
import CssWorkareaView from '../views/css-workarea.vue';
import CssPanelView from '../views/css-panel.vue';
import CssHouseWorkareaView from '../views/css-workarea-house.vue';
import CssWindowWorkareaView from '../views/css-workarea-window.vue';
import CssBusWorkareaView from '../views/css-workarea-bus.vue';
import CssPillsWorkareaView from '../views/css-workarea-pills.vue';

import DefaultPanelView from '../views/default-panel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'css',
    path: '/css',
    components: {
      workarea: CssWorkareaView,
      panel: CssPanelView,
    },
    children: [
      {
        name: 'house',
        path: 'house',
        component: CssHouseWorkareaView,
      },
      {
        name: 'window',
        path: 'window',
        component: CssWindowWorkareaView,
      },
      {
        name: 'pills',
        path: 'pills',
        component: CssPillsWorkareaView,
      },
      {
        name: 'bus',
        path: 'bus',
        component: CssBusWorkareaView,
      },
    ]
  },
  {
    name: 'stargaze',
    path: '/',
    components: {
      workarea: StargazeWorkareaView,
      panel: StargazePanelView,
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
    name: 'mesh',
    path: '/mesh',
    components: {
      workarea: MeshWorkareaView,
      panel: MeshPanelView,
    },
  },
  {
    name: 'gallery-3d',
    path: '/gallery-3d',
    components: {
      workarea: Projects3DWorkareaView,
      panel: Projects3DPanelView,
    },
  },
  {
    name: 'gallery-video',
    path: '/gallery-video',
    components: {
      workarea: ProjectsVideoWorkareaView,
      panel: DefaultPanelView,
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

export default router;