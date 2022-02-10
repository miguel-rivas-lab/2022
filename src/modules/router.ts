import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import DefaultPanelView from '../views/default-panel.vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import ThreePanelView from '../views/three-panel.vue';
import ThreeWorkareaView from '../views/three-workarea.vue';
import CubeWorkareaView from '../views/cube-workarea.vue';
import CubePanelView from '../views/cube-panel.vue';
import FlipbookWorkareaView from '../views/flipbook-workarea.vue';
import FlipbookPanelView from '../views/flipbook-panel.vue';

import ProjectsListWorkareaView from '../views/projects-list-workarea.vue';
import ProjectsListPanelView from '../views/projects-list-panel.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';

import HouseWorkareaView from '../views/house-workarea.vue';
import WindowWorkareaView from '../views/window-workarea.vue';
import BusWorkareaView from '../views/minivan-workarea.vue';
import PillsWorkareaView from '../views/pills-workarea.vue';

import Projects3DWorkareaView from '../views/images-workarea.vue';
import Projects3DPanelView from '../views/images-panel.vue';
import ProjectsVideoWorkareaView from '../views/video-workarea.vue';

import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';
import LocationsPanelView from '../views/locations-panel.vue';
import LocationsWorkareaView from '../views/locations-workarea.vue';

import GridWorkareaView from '../views/grid-workarea.vue';
import GridPanelView from '../views/grid-panel.vue';
import StargazeWorkareaView from '../views/stargaze-workarea.vue';
import StargazePanelView from '../views/stargaze-panel.vue';
import ColorsPanelView from '../views/colors-panel.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';
import CSSStudyWorkareaView from '../views/css-study-workarea.vue';
import AvatarWorkareaView from '../views/avatar-workarea.vue';
import AvatarPanelView from '../views/avatar-panel.vue';

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
    name: 'css-study',
    path: '/css-study',
    components: {
      workarea: CSSStudyWorkareaView,
      panel: DefaultPanelView,
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

  {
    name: 'canvas',
    path: '/canvas',
    components: {
      workarea: Vue.extend({
        props: {
          defaultRoute: {
            default: "locations"
          },
        },
        extends: NestedWorkareaView,
      }),
      panel: Vue.extend({
        props: {
          panelTitle: {
            default: "Canvas Prototypes"
          },
          links: {
            default: () => ([
              {
                text: "Map",
                name: "locations",
                icon: "airplane",
              },
              {
                text: "Avatar",
                name: "avatar",
                icon: "person",
              },
              {
                text: "Gear Builder",
                name: "gear",
                icon: "cog-transfer-outline",
              },
              {
                text: "Color Wheel",
                name: "wheel",
                icon: "palette",
              },
            ])
          }
        },
        extends: NestedPanelView,
      }),
    },
    children: [
      {
        name: 'locations',
        path: '/locations',
        components: {
          workarea2: LocationsWorkareaView,
          panel2: LocationsPanelView,
        },
      },
      {
        name: 'avatar',
        path: '/avatar',
        components: {
          workarea2: AvatarWorkareaView,
          panel2: AvatarPanelView,
        },
      },
      {
        name: 'gear',
        path: '/gear',
        components: {
          workarea2: GearWorkareaView,
          panel2: GearPanelView,
        },
      },
      {
        name: 'wheel',
        path: '/wheel',
        components: {
          workarea2: WheelWorkareaView,
          panel2: WheelPanelView,
        },
      },
    ],
  },
  {
    name: 'css',
    path: '/css',
    components: {
      workarea: Vue.extend({
        props: {
          defaultRoute: {
            default: "house"
          },
        },
        extends: NestedWorkareaView,
      }),
      panel: Vue.extend({
        props: {
          panelTitle: {
            default: "CSS Models"
          },
          links: {
            default: () => ([
              {
                text: "House",
                name: "house",
                icon: "home",
              },
              {
                text: "Window",
                name: "window",
                icon: "sensor_window",
              },
              {
                text: "Minivan",
                name: "minivan",
                icon: "directions_bus",
              },
              {
                text: "Pills",
                name: "pills",
                icon: "medical_services",
              },
            ])
          }
        },
        extends: NestedPanelView,
      }),
    },
    children: [
      {
        name: 'house',
        path: '/house',
        components: {
          workarea2: HouseWorkareaView,
        },
      },
      {
        name: 'window',
        path: '/window',
        components: {
          workarea2: WindowWorkareaView,
        }
      },
      {
        name: 'pills',
        path: '/pills',
        components: {
          workarea2: PillsWorkareaView,
        }
      },
      {
        name: 'minivan',
        path: '/minivan',
        components: {
          workarea2: BusWorkareaView,
        }
      },
    ],
  },
  {
    name: 'projects',
    path: '/projects',
    components: {
      workarea: Vue.extend({
        props: {
          defaultRoute: {
            default: "list"
          },
        },
        extends: NestedWorkareaView,
      }),
      panel: Vue.extend({
        props: {
          panelTitle: {
            default: "Projects"
          },
          links: {
            default: () => ([
              {
                text: "List",
                name: "list",
                icon: "format_list_bulleted",
              },
              {
                text: "Statistics",
                name: "statistics",
                icon: "chart-areaspline",
              },
            ])
          }
        },
        extends: NestedPanelView,
      }),
    },
    children: [
      {
        name: 'list',
        path: '/list',
        components: {
          workarea2: ProjectsListWorkareaView,
          panel2: ProjectsListPanelView,
        },
      },
      {
        name: 'statistics',
        path: '/statistics',
        components: {
          workarea2: StatisticsWorkareaView,
        },
      },
    ],
  },
  {
    name: 'threejs',
    path: '/threejs',
    components: {
      workarea: Vue.extend({
        props: {
          defaultRoute: {
            default: "flipbook"
          },
        },
        extends: NestedWorkareaView,
      }),
      panel: Vue.extend({
        props: {
          panelTitle: {
            default: "3D Models"
          },
          links: {
            default: () => ([
              {
                text: "Flipbook",
                name: "flipbook",
                icon: "",
              },
              {
                text: "Color Cube",
                name: "cube",
                icon: "cube-outline",
              },
              {
                text: "Spirit",
                name: "spirit",
                icon: "monster",
              },
              {
                text: "Drakkar",
                name: "drakkar",
                icon: "sail-boat",
              },
              {
                text: "Car",
                name: "car",
                icon: "directions_car",
              },
              {
                text: "X-wing",
                name: "xwing",
                icon: "rocket-launch",
              },
            ])
          }
        },
        extends: NestedPanelView,
      }),
    },
    children: [
      {
        name: 'flipbook',
        path: '/flipbook',
        components: {
          workarea2: FlipbookWorkareaView,
          panel2: FlipbookPanelView,
        },
      },
      {
        name: 'cube',
        path: '/cube',
        components: {
          workarea2: CubeWorkareaView,
          panel2: CubePanelView,
        },
      },
      {
        name: 'spirit',
        path: '/spirit',
        components: {
          workarea2: Vue.extend({
            props: {
              mesh: {
                default: "spirit"
              },
              minDistance: {
                default: 7.5,
              },
              maxDistance: {
                type: Number,
                default: 25,
              },
            },
            extends: ThreeWorkareaView,
          }),
          panel2: ThreePanelView,
        },
      },
      {
        name: 'drakkar',
        path: '/drakkar',
        components: {
          workarea2: Vue.extend({
            props: {
              mesh: {
                default: "drakkar"
              },
              minDistance: {
                default: 65,
              },
              maxDistance: {
                type: Number,
                default: 75,
              },
            },
            extends: ThreeWorkareaView,
          }),
          panel2: ThreePanelView,
        },
      },
      {
        name: 'car',
        path: '/car',
        components: {
          workarea2: Vue.extend({
            props: {
              mesh: {
                default: "car"
              },
              minDistance: {
                default: 55,
              },
              maxDistance: {
                type: Number,
                default: 75,
              },
            },
            extends: ThreeWorkareaView,
          }),
          panel2: ThreePanelView,
        },
      },
      {
        name: 'xwing',
        path: '/xwing',
        components: {
          workarea2: Vue.extend({
            props: {
              mesh: {
                default: "xwing"
              },
              minDistance: {
                default: 35,
              },
              maxDistance: {
                type: Number,
                default: 55,
              },
            },
            extends: ThreeWorkareaView,
          }),
          panel2: ThreePanelView,
        },
      },
    ],
  },
  {
    name: 'gallery',
    path: '/gallery',
    components: {
      workarea: Vue.extend({
        props: {
          defaultRoute: {
            default: "images"
          },
        },
        extends: NestedWorkareaView,
      }),
      panel: Vue.extend({
        props: {
          panelTitle: {
            default: "Galleries"
          },
          links: {
            default: () => ([
              {
                text: "Images",
                name: "images",
                icon: "collections",
              },
              {
                text: "Videos",
                name: "videos",
                icon: "movie",
              },
            ])
          }
        },
        extends: NestedPanelView,
      }),
    },
    children: [
      {
        name: 'images',
        path: '/images',
        components: {
          workarea2: Projects3DWorkareaView,
          panel2: Projects3DPanelView,
        },
      },
      {
        name: 'videos',
        path: '/videos',
        components: {
          workarea2: ProjectsVideoWorkareaView,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;