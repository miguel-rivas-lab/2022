import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';
import LocationsPanelView from '../views/locations-panel.vue';
import LocationsWorkareaView from '../views/locations-workarea.vue';
import AvatarWorkareaView from '../views/avatar-workarea.vue';
import AvatarPanelView from '../views/avatar-panel.vue';
import PixelWorkareaView from '../views/pixel-workarea.vue';
import PixelPanelView from '../views/pixel-panel.vue';

export default {
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
          default: "canvas.navTitle"
        },
        links: {
          default: () => ([
            {
              text: "canvas.section.map.title",
              name: "locations",
              icon: "airplane",
            },
            {
              text: "canvas.section.avatar.title",
              name: "avatar",
              icon: "person",
            },
            {
              text: "canvas.section.pixelEditor.title",
              name: "pixel",
              icon: "category",
            },
            {
              text: "canvas.section.gearBuilder.title",
              name: "gear",
              icon: "cog",
            },
            {
              text: "canvas.section.colorWheel.title",
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
      name: 'pixel',
      path: '/pixel',
      components: {
        workarea2: PixelWorkareaView,
        panel2: PixelPanelView,
      },
    },
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
};