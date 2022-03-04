<template lang="pug">
scroll-area(color="royal-purple")
  container(size="900")
    section.nano-box
      h1 Fractions
      template(v-for="(columns, indexRow) in rowsFractions")
        row(v-bind:key="`indexRowF${indexRow}`")
          template(v-for="(column, indexColumn) in columns")
            column(
              :size="column",
              v-bind:key="`indexColumnF${indexRow}-${indexColumn}`"
            )
              btn(
                :text="column",
                :color="color[indexColumn]",
                v-nano-tooltip.top="column"
              )
    section.nano-box
      h1 Percents
      row.alert.warning
        column(size="100%") The final value of a percent size will be a fraction.
      template(v-for="(columns, indexRow) in rowsPercents")
        row(v-bind:key="`indexRowP${indexRow}`")
          template(v-for="(column, indexColumn) in columns")
            column(
              :size="column",
              v-bind:key="`indexColumnP${indexRow}-${indexColumn}`"
            )
              btn(
                :text="column",
                :color="color[indexColumn]",
                v-nano-tooltip.top="column"
              )

    section.nano-box
      h1 Absolutes
      row.alert.warning
        column(size="100%") Values above 300px will be appended as a style attribute instead of a class.
      template(v-for="(columns, indexRow) in rowsAbsolutes")
        row(v-bind:key="`indexRowA${indexRow}`")
          template(v-for="(column, indexColumn) in columns")
            column(
              :size="column",
              v-bind:key="`indexColumnA${indexRow}-${indexColumn}`"
            )
              btn(
                :text="column",
                :color="color[indexColumn]",
                v-nano-tooltip.top="column"
              )

    section.nano-box
      h1 Formulas
      row.alert.warning
        column(size="100%") Multiplication is only allow with subtraction values.
      template(v-for="(columns, indexRow) in formulas")
        row(v-bind:key="`indexRowFx${indexRow}`")
          template(v-for="(column, indexColumn) in columns")
            column(
              :size="column",
              v-bind:key="`indexColumnFx${indexRow}-${indexColumn}`"
            )
              btn(
                :text="column",
                :color="color[indexColumn]",
                v-nano-tooltip.top="column"
              )

    section.nano-box
      h1 Height Fractions (% / VH)
      row.alert.warning
        column(size="100%") 1/2 refers to a relative size based on the container, 1/2vh refers to a relative size based on the screen height.
      row(:spacing="0.25")
        template(v-for="(columns, indexRow) in rowsHeightVH")
          column(size="1/5").fheight
            row(v-bind:key="`indexRowHF${indexRow}`")
              template(v-for="(column, indexColumn) in columns")
                column(
                  :size="column",
                  v-bind:key="`indexColumnHF${indexRow}-${indexColumn}`"
                )
                  btn(
                    :text="column",
                    :color="colorHeight[indexColumn]",
                    v-nano-tooltip.top="column.split(',')[1]"
                  )

    section.nano-box
      h1 Height Percents (% / VH)
      row.alert.warning
        column(size="100%") 100% refers to a relative size based on the container, 100%vh refers to a relative size based on the screen height.
      row(:spacing="0.25")
        template(v-for="(columns, indexRow) in rowsHeightPercents")
          column(size="1/5").fheight
            row(v-bind:key="`indexRowHF${indexRow}`")
              template(v-for="(column, indexColumn) in columns")
                column(
                  :size="column",
                  v-bind:key="`indexColumnHF${indexRow}-${indexColumn}`"
                )
                  btn(
                    :text="column",
                    :color="colorHeight[indexColumn]",
                    v-nano-tooltip.top="column.split(',')[1]"
                  )

    section.nano-box
      h1 Height Absolute
      row.alert.warning
        column(size="100%") Values above 300px will be appended as a style attribute instead of a class.
      row(:spacing="0.25")
        template(v-for="(columns, indexRow) in rowsHeightAbsolutes")
          column(size="1/5").fheight
            row(v-bind:key="`indexRowHF${indexRow}`")
              template(v-for="(column, indexColumn) in columns")
                column(
                  :size="column",
                  v-bind:key="`indexColumnHF${indexRow}-${indexColumn}`"
                )
                  btn(
                    :text="column",
                    :color="colorHeight[indexColumn]",
                    v-nano-tooltip.top="column.split(',')[1]"
                  )
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    color: ["desert", "silver", "desert"],
    colorHeight: ["blush", "fire-brick"],
    rowsFractions: [["1/1"], ["1/2", "1/2"]],
    rowsPercents: [["100%"]],
    rowsAbsolutes: [],
    formulas: [
      ["300", "1/1-25*12"],
      ["100", "1/1-25*4"],
      ["50", "1/1-50*3", "100"],
      ["35", "1/1-35*2", "35"],
    ],
    rowsHeightVH: [["100%, 1/1"]],
    rowsHeightPercents: [["100%, 100%"]],
    rowsHeightAbsolutes: [],
  }),
  created() {
    for (let c = 3; c <= 20; c++) {
      this.rowsFractions.push([`1/${c}`, `${c - 1}/${c}`]);
    }

    for (let c = 1; c * 5 < 100; c++) {
      let mainColumn = 100 - c * 5;
      let complementColumn = c * 5;
      this.rowsPercents.push([`${mainColumn}%`, `${complementColumn}%`]);
    }

    for (let c = 1; c * 5 <= 50; c++) {
      let mainColumn = 100 - c * 5;
      let complementColumn = c * 5;
      this.rowsHeightPercents.push([
        `100%, ${mainColumn}%`,
        `100%, ${complementColumn}%`,
      ]);
    }

    for (let c = 0; c <= 61; c++) {
      let newSize = c * 5;
      this.rowsAbsolutes.push([`${newSize}`, `100%-${newSize}`]);
    }

    for (let c = 0; c <= 30; c++) {
      let newSize = c * 5;
      this.rowsHeightAbsolutes.push([
        `100%, ${newSize}`,
        `100%, ${300 - newSize}`,
      ]);
    }

    for (let c = 2; c <= 5; c++) {
      this.rowsHeightVH.push([`100%, 1/${c}`, `100%, ${c - 1}/${c}`]);
    }
  },
});
</script>