import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import UnityWorkareaView from '../views/unity-workarea.vue';

export default {
  name: 'unity',
  path: '/unity',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "kaspar"
        },
      },
      extends: NestedWorkareaView,
    }),
    panel: Vue.extend({
      props: {
        panelTitle: {
          default: "unity.navTitle"
        },
        links: {
          default: () => ([
            {
              text: "Kaspar",
              name: "kaspar",
              icon: "snowflake",
            },
            {
              text: "Iqra",
              name: "iqra",
              icon: "leaf",
            },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [
    {
      name: 'kaspar',
      path: '/kaspar',
      components: {
        workarea2: Vue.extend({
          props: {
            scene: {
              default: "kaspar"
            },
          },
          extends: UnityWorkareaView,
        }),
      },
    },
    {
      name: 'iqra',
      path: '/iqra',
      components: {
        workarea2: Vue.extend({
          props: {
            scene: {
              default: "iqra"
            },
          },
          extends: UnityWorkareaView,
        }),
      },
    },
  ],
};