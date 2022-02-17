import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import ProjectsListWorkareaView from '../views/projects-list-workarea.vue';
import ProjectsListPanelView from '../views/projects-list-panel.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';

export default {
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
};