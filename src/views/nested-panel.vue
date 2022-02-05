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
                      :color="$route.name === route.name ? 'green-pea' : 'charcoal'",
                      :glyph="route.icon",
                      :to="route"
                    )
                  column(size="100%-35")
                    btn(
                      tag="span",
                      color="gravel"
                      :active="$route.name === route.name",
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
  mounted(){
    console.log(this.$route.name);
  },
});
</script>