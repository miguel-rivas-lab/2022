import Vue from 'vue';
import NanoRow from 'nano-grid/vue/row.vue';
import NanoColumn from 'nano-grid/vue/column.vue';
import NanoIcon from 'nano-grid/vue/icon.vue';
import NanoBtn from 'nano-grid/vue/btn.vue';
import NanoScrollArea from 'nano-grid/vue/scroll-area.vue';
import NumberInput from 'nano-grid/vue/number-input.vue';

import Container from '../components/container.vue';

Vue.component("container", Container);

Vue.component("row", NanoRow);
Vue.component("column", NanoColumn);
Vue.component("icon", NanoIcon);
Vue.component("btn", NanoBtn);
Vue.component("scroll-area", NanoScrollArea);
Vue.component("number-input", NumberInput);

// ---------------------------------- Alias:Icon
Vue.component("m-icon", Vue.extend({
  props: {
    mode: {
      default: 'mdi'
    }
  },
  extends: NanoIcon
}));
// ---------------------------------- Alias:Column
Vue.component("prefix", Vue.extend({
  props: {
    mode: {
      default: 'prefix'
    }
  },
  extends: NanoColumn
}));

Vue.component("suffix", Vue.extend({
  props: {
    mode: {
      default: 'suffix'
    }
  },
  extends: NanoColumn
}));

Vue.component("t-column", Vue.extend({
  props: {
    tableElement: {
      default: true
    }
  },
  extends: NanoColumn
}));

Vue.component("t-prefix", Vue.extend({
  props: {
    mode: {
      default: 'prefix'
    },
    tableElement: {
      default: true
    }
  },
  extends: NanoColumn
}));

Vue.component("t-suffix", Vue.extend({
  props: {
    mode: {
      default: 'suffix'
    },
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