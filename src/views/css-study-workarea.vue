<template lang="pug">
scroll-area(color="royal-purple")
  container(size="1450")
    article.nano-box
      h1 CSS Database
      hr
      .table(role="table")
        .table-body(role="rowgroup")
          template(v-for="(data, dataIndex) in cssProperties")
            toggle-row(breakpoint="lg", v-bind:key="dataIndex")
              template(v-slot:header)
                prefix
                  btn(:color="pillColor[data.version]", :text="data.version")
                column(size="100%-35*2")
                  | {{ data.dependency ? `${data.dependency}: ` : '' }}{{ data.name }}

              template(v-slot:more)
                t-column(size="100%")
                  .pill-container
                    ul
                      li(v-if="data.initial") Initial : {{ data.initial }}
                      li(v-if="data.values.length")
                        | Values :&nbsp;
                        template(v-for="(value, valueIndex) in data.values")
                          span.pill(v-bind:key="valueIndex", v-html="value")
                      li(v-if="data.inherit") Inherit : {{ data.inherit }}
                      li(v-if="data.complement.length")
                        | Complement :&nbsp;
                        template(v-for="(value, valueIndex) in data.complement")
                          span.pill(v-bind:key="valueIndex", v-html="value")
                      li(v-if="data.applyTo") Apply To : {{ data.applyTo }}
                      li(v-if="data.description") {{ data.description }}
</template>

<script lang="ts">
import Vue from "vue";
import { cssProperties } from "../db/css-properties";
import ToggleRow from "../components/toggle-row.vue";

export default Vue.extend({
  components: {
    ToggleRow,
  },
  data: () => ({
    cssProperties,
    pillColor: { 1: "mariner", 2.1: "rust", 3: "fire-brick" },
  }),
});
</script>