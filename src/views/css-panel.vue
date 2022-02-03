<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend CSS Animations
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
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    db: [
      {
        text: "House",
        name: "house",
        icon: "home",
      },
      {
        text: "Window",
        name: "window",
        icon: "sensor_window",
      },
      {
        text: "Minivan",
        name: "minivan",
        icon: "directions_bus",
      },
      {
        text: "Pills",
        name: "pills",
        icon: "medical_services",
      },
    ],
  }),
});
</script>