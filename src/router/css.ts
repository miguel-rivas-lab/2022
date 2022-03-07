import Vue from 'vue';
import i18n from "../i18n";

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
          default: i18n.t("css.navTitle")
        },
        links: {
          default: () => ([
            {
              text: i18n.t("css.section.house.title"),
              name: "house",
              icon: "home",
            },
            {
              text: i18n.t("css.section.window.title"),
              name: "window",
              icon: "window",
            },
            {
              text: i18n.t("css.section.minivan.title"),
              name: "minivan",
              icon: "bus",
            },
            {
              text: i18n.t("css.section.pills.title"),
              name: "pills",
              icon: "medical",
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