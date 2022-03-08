import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import Projects3DWorkareaView from '../views/images-workarea.vue';
import Projects3DPanelView from '../views/images-panel.vue';
import ProjectsVideoWorkareaView from '../views/video-workarea.vue';

export default {
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
          default: "galleries.navTitle"
        },
        links: {
          default: () => ([
            {
              text: "galleries.section.images.title",
              name: "images",
              icon: "collections",
            },
            {
              text: "galleries.section.videos.title",
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
};