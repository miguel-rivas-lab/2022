import Vue from 'vue';
import NanoRow from '../nano-grid/components/row.vue';
import NanoColumn from '../nano-grid/components/column.vue';
import NanoIcon from '../nano-grid/components/icon.vue';
import NanoBtn from '../nano-grid/components/btn.vue';
import NanoScrollArea from '../nano-grid/components/scroll-area.vue';

import Container from '../components/container.vue';

Vue.component("container", Container);

Vue.component("row", NanoRow);
Vue.component("column", NanoColumn);
Vue.component("icon", NanoIcon);
Vue.component("btn", NanoBtn);
Vue.component("scroll-area", NanoScrollArea);

// ---------------------------------- Alias:Column

Vue.component("t-column", Vue.extend({
  props: {
    tableElement: {
      default: true
    }
  },
  extends: NanoColumn
}));

// ---------------------------------- Alias:Row
Vue.component("t-row", Vue.extend({
  props: {
    tableElement: {
      default: true
    }
  },
  extends: NanoRow
}));