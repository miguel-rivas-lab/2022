import Vue from 'vue';
import i18n from "../i18n";

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import ColorsPanelView from '../views/colors-panel.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';
import IconsWorkareaView from '../views/icons-workarea.vue';
import GridWorkareaView from '../views/grid-workarea.vue';
import GridGalleryWorkareaView from '../views/grid-gallery-workarea.vue';
import GridPanelView from '../views/grid-panel.vue';

export default {
  name: 'ui',
  path: '/ui',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "grid"
        },
      },
      extends: NestedWorkareaView,
    }),
    panel: Vue.extend({
      props: {
        panelTitle: {
          default: i18n.t("ui.navTitle")
        },
        links: {
          default: () => ([
            {
              text: i18n.t("ui.section.gridBuilder.title"),
              name: "grid",
              icon: "robot",
            },
            {
              text: i18n.t("ui.section.gridGallery.title"),
              name: "grid-gallery",
              icon: "robot",
            },
            {
              text: i18n.t("ui.section.colors.title"),
              name: "colors",
              icon: "color",
            },
            {
              text: i18n.t("ui.section.icons.title"),
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
    {
      name: 'grid',
      path: '/grid',
      components: {
        workarea2: GridWorkareaView,
        panel2: GridPanelView,
      },
    },
    {
      name: 'grid-gallery',
      path: '/grid-gallery',
      components: {
        workarea2: GridGalleryWorkareaView,
      },
    },
  ],
};