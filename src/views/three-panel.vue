<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend 3D Models
      row
        column(size="100%")
          ul.summary
            template(v-for="(route, routeIndex) in db")
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
  data: () => ({
    db: [
      {
        text: "Color Cube",
        name: "cube",
        icon: "cube-outline",
      },
      {
        text: "Spirit",
        name: "spirit",
        icon: "monster",
      },
    ],
  }),
});
</script>