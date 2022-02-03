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
      },
      {
        text: "Window",
        name: "window",
      },
      {
        text: "Bus",
        name: "bus",
      },
      {
        text: "Pills",
        name: "pills",
      },
    ],
  }),
});
</script>