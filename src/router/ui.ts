import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import ColorsPanelView from '../views/colors-panel.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';
import IconsPanelView from '../views/icons-panel.vue';
import IconsWorkareaView from '../views/icons-workarea.vue';

export default {
  name: 'ui',
  path: '/ui',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "colors"
        },
      },
      extends: NestedWorkareaView,
    }),
    panel: Vue.extend({
      props: {
        panelTitle: {
          default: "colors"
        },
        links: {
          default: () => ([
            {
              text: "Colors",
              name: "colors",
              icon: "color",
            },
            {
              text: "Icons",
              name: "icons",
              icon: "category",
            },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [
    {
      name: 'colors',
      path: '/colors',
      components: {
        panel2: ColorsPanelView,
        workarea2: ColorsWorkareaView,
      },
    },
    {
      name: 'icons',
      path: '/icons',
      components: {
        workarea2: IconsWorkareaView,
      },
    },
  ],
};