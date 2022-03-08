<template lang="pug">
scroll-area(color="royal-purple")
  container(size="900")
    section.nano-box
      h1 {{ $t('ui.section.gridGallery.workarea.fractions') }}
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
      h1 {{ $t('ui.section.gridGallery.workarea.percents') }}
      row.alert.warning
        column(size="100%") {{ $t('ui.section.gridGallery.workarea.percentsAlert') }}
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
      h1 {{ $t('ui.section.gridGallery.workarea.absolutes') }}
      row.alert.warning
        column(size="100%") {{ $t('ui.section.gridGallery.workarea.absolutesAlert') }}
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
      h1 {{ $t('ui.section.gridGallery.workarea.formulas') }}
      row.alert.warning
        column(size="100%") {{ $t('ui.section.gridGallery.workarea.formulasAlert') }}
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
      h1 {{ $t('ui.section.gridGallery.workarea.heightFractions') }}
      row.alert.warning
        column(size="100%") {{ $t('ui.section.gridGallery.workarea.heightFractionsAlert') }}
      row(grid)
        template(v-for="(columns, indexRow) in rowsHeightVH")
          column.fheight(size="1/5")
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
      h1 {{ $t('ui.section.gridGallery.workarea.heightPercents') }}
      row.alert.warning
        column(size="100%") {{ $t('ui.section.gridGallery.workarea.heightPercentsAlert') }}
      row(grid)
        template(v-for="(columns, indexRow) in rowsHeightPercents")
          column.fheight(size="1/5")
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
      h1 {{ $t('ui.section.gridGallery.workarea.heightAbsolute') }}
      row.alert.warning
        column(size="100%") {{ $t('ui.section.gridGallery.workarea.heightAbsoluteAlert') }}
      row(grid)
        template(v-for="(columns, indexRow) in rowsHeightAbsolutes")
          column.fheight(size="1/5")
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

    for (let c = 1; c * 5 <= 50; c++) {
      let mainColumn = 100 - c * 5;
      let complementColumn = c * 5;
      this.rowsPercents.push([`${mainColumn}%`, `${complementColumn}%`]);
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