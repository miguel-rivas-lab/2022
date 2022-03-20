<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{$t(panelTitle)}}
      row
        column(size="100%")
          ul.summary
            template(v-for="(route, routeIndex) in links")
              li(v-bind:key="routeIndex")
                row
                  column(size="35")
                    btn(
                      tag="span",
                      mode="flat"
                      :color="$route.name === route.name ? 'green-pea' : 'charcoal'",
                      :glyph="route.icon",
                      :to="route"
                    )
                  column(size="100%-35")
                    btn(
                      tag="span",
                      color="gravel"
                      mode="flat"
                      :active="$route.name === route.name",
                      :text="$t(route.text)",
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