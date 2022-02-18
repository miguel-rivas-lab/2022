import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import ThreePanelView from '../views/three-panel.vue';
import ThreeWorkareaView from '../views/three-workarea.vue';
import CubeWorkareaView from '../views/cube-workarea.vue';
import CubePanelView from '../views/cube-panel.vue';
import FlipbookWorkareaView from '../views/flipbook-workarea.vue';
import FlipbookPanelView from '../views/flipbook-panel.vue';
import PlanetWorkareaView from '../views/planet-workarea.vue';

export default {
  name: 'threejs',
  path: '/threejs',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "cube"
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
            {
              text: "Portfolio 2017",
              name: "portfolio2017",
              icon: "book",
            },
            {
              text: "Audio2",
              name: "audio2",
              icon: "book",
            },
            // {
            //   text: "Planet",
            //   name: "planet",
            //   icon: "",
            // },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [
    {
      name: 'audio2',
      path: '/audio2',
      components: {
        workarea2: Vue.extend({
          props: {
            book: {
              default: "audio"
            },
            pages: {
              default: 12
            }
          },
          extends: FlipbookWorkareaView,
        }),
        panel2: FlipbookPanelView,
      },
    },
    {
      name: 'portfolio2017',
      path: '/portfolio2017',
      components: {
        workarea2: Vue.extend({
          props: {
            book: {
              default: "art"
            },
            pages: {
              default: 14
            }
          },
          extends: FlipbookWorkareaView,
        }),
        panel2: FlipbookPanelView,
      },
    },
    {
      name: 'planet',
      path: '/planet',
      components: {
        workarea2: PlanetWorkareaView,
        panel2: ThreePanelView,
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
};