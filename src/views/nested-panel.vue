<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{panelTitle}}
      row
        column(size="100%")
          ul.summary
            template(v-for="(route, routeIndex) in links")
              li(v-bind:key="routeIndex")
                row
                  prefix(size="35")
                    btn(
                      tag="span",
                      color="burn-orange",
                      :glyph="route.icon",
                      :to="route"
                    )
                  column(size="100%-35")
                    btn(
                      tag="span",
                      color="gold-tips",
                      :text="route.text",
                      :to="route"
                    )
  router-view(name="panel2")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    panelTitle: {
      type: String,
      default: "",
    },
    links: {
      type: Array,
      default: () => ([]),
    }
  },
});
</script>