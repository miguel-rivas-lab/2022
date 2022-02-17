import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import HouseWorkareaView from '../views/house-workarea.vue';
import WindowWorkareaView from '../views/window-workarea.vue';
import BusWorkareaView from '../views/minivan-workarea.vue';
import PillsWorkareaView from '../views/pills-workarea.vue';

export default {
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
};