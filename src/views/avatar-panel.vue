<template lang="pug">
scroll-area(color="royal-purple")
  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.avatar.panel.presets.legend') }}

      row
        column(size="100%")
          btn(color="gold-tips", text="Miguel", @click="miguel()")

      row
        column(size="100%")
          btn(
            color="gold-tips",
            :text="$t('canvas.section.avatar.panel.presets.90')",
            @click="baggy()"
          )

      row
        column(size="100%")
          btn(
            color="gold-tips",
            :text="$t('canvas.section.avatar.panel.presets.work')",
            @click="monday()"
          )

      row
        column(size="100%")
          btn(
            color="gold-tips",
            :text="$t('canvas.section.avatar.panel.presets.sunday')",
            @click="sunday()"
          )

      row
        column(size="100%")
          btn(
            color="gold-tips",
            :text="$t('canvas.section.avatar.panel.presets.pooh')",
            @click="pooh()"
          )

      row
        column(size="100%")
          btn(
            color="gold-tips",
            :text="$t('canvas.section.avatar.panel.presets.dc')",
            @click="dcBoi()"
          )

      row
        column(size="100%")
          btn(
            color="gold-tips",
            :text="$t('canvas.section.avatar.panel.presets.pool')",
            @click="summer()"
          )

      row
        column(size="100%")
          btn(
            color="gold-tips",
            :text="$t('canvas.section.avatar.panel.presets.franciscano')",
            @click="franciscano()"
          )

  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.avatar.panel.general.legend') }}

      slider#height(
        :label="$t('canvas.section.avatar.panel.general.height')",
        min="0.80",
        max="1",
        step="0.01",
        v-on:update-value="updateVal('height', $event)",
        :value="selection.height"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.porcelain')",
        @click="tan('#e9ceb2ff', '#e9957bff', '#e9957bff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.honey')",
        @click="tan('#daad7fff', '#d28d5fff', '#d28d5fff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.caramel')",
        @click="tan('#b68450ff', '#916d56ff', '#916d56ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.umber')",
        @click="tan('#8b653dff', '#513b3bff', '#513b3bff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.sable')",
        @click="tan('#383028ff', '#4c433eff', '#4c433eff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.avatar')",
        @click="tan('#1d2847ff', '#26345eff', '#26345eff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.hellboy')",
        @click="tan('#541e21ff', '#773636ff', '#773636ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.bubblegum')",
        @click="tan('#ad7b9cff', '#875a7dff', '#875a7dff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.general.green')",
        @click="tan('#284426ff', '#1d281eff', '#1d281eff')"
      )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.general.skinColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.skinColor",
                :preset-colors="skinColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.general.skinColor2') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.skinColor2",
                :preset-colors="skinColors2",
                disable-fields
              )

  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.avatar.panel.face.legend') }}

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.raven')",
        @click="dyeHair('#444444ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.brunette')",
        @click="dyeHair('#6d5542ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.blonde')",
        @click="dyeHair('#a8723aff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.ginger')",
        @click="dyeHair('#a34026ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.silver')",
        @click="dyeHair('#abababff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.blue')",
        @click="dyeHair('#191823ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.red')",
        @click="dyeHair('#3C1414ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.bubblegum')",
        @click="dyeHair('#913f76ff')"
      )

      row: column(size="100%"): btn(
        color="gold-tips",
        :text="$t('canvas.section.avatar.panel.face.green')",
        @click="dyeHair('#123524ff')"
      )

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.topHair }")
            | {{ $t('canvas.section.avatar.panel.face.topHair') }}
            input(type="checkbox", v-model="selection.topHair")

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.sideHair }")
            | {{ $t('canvas.section.avatar.panel.face.sideHair') }}
            input(type="checkbox", v-model="selection.sideHair")

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.beard }")
            | {{ $t('canvas.section.avatar.panel.face.beard') }}
            input(type="checkbox", v-model="selection.beard")

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.face.hairColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.hairColor",
                :preset-colors="hairColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.face.hairSideColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.hairSideColor",
                :preset-colors="hairColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.face.beardColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.beardColor",
                :preset-colors="hairColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.face.lipsColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.lipsColor",
                :preset-colors="lipsColors",
                disable-fields
              )

      slider#happiness(
        :label="$t('canvas.section.avatar.panel.face.happiness')",
        min="-20",
        max="20",
        step="0.1",
        v-on:update-value="updateVal('happiness', $event)",
        :value="selection.happiness"
      )

  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.avatar.panel.shirt.legend') }}

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.shirt }")
            | {{ $t('canvas.section.avatar.panel.shirt.shirt') }}
            input(type="checkbox", v-model="selection.shirt")

      row
        column(size="50%")
          label.btn.flat.charcoal(:class="{ active: selection.leftPocket }")
            | {{ $t('canvas.section.avatar.panel.shirt.lPockect') }}
            input(type="checkbox", v-model="selection.leftPocket")
        column(size="50%")
          label.btn.flat.charcoal(:class="{ active: selection.rightPocket }")
            | {{ $t('canvas.section.avatar.panel.shirt.rPockect') }}
            input(type="checkbox", v-model="selection.rightPocket")

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.buttons }")
            | {{ $t('canvas.section.avatar.panel.shirt.buttons') }}
            input(type="checkbox", v-model="selection.buttons")

      slider#shirt-length(
        :label="$t('canvas.section.avatar.panel.shirt.length')",
        min="0",
        max="2.25",
        step="0.01",
        v-on:update-value="updateVal('shirtLengthPercent', $event)",
        :value="selection.shirtLengthPercent"
      )

      slider#sleeve-length(
        :label="$t('canvas.section.avatar.panel.shirt.sleeve')",
        min="0",
        max="0.95",
        step="0.01",
        v-on:update-value="updateVal('armSleeveLengthPercent', $event)",
        :value="selection.armSleeveLengthPercent"
      )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.shirt.shirtColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.shirtColor",
                :preset-colors="fabricColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.shirt.sleeveColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.armSleeveColor",
                :preset-colors="fabricColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.shirt.pockectsColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.pocketColor",
                :preset-colors="fabricColors",
                disable-fields
              )

  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.avatar.panel.pants.legend') }}

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.pants }")
            | {{ $t('canvas.section.avatar.panel.pants.pants') }}
            input(type="checkbox", v-model="selection.pants")

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.belt }")
            | {{ $t('canvas.section.avatar.panel.pants.belt') }}
            input(type="checkbox", v-model="selection.belt")

      slider#pants-length(
        :label="$t('canvas.section.avatar.panel.pants.length')",
        min="0",
        max="1",
        step="0.01",
        v-on:update-value="updateVal('pantsLegLengthPercent', $event)",
        :value="selection.pantsLegLengthPercent"
      )

      slider#pants-fit(
        :label="$t('canvas.section.avatar.panel.pants.fit')",
        min="0",
        max="31",
        step="1",
        v-on:update-value="updateVal('pantsFit', $event)",
        :value="selection.pantsFit"
      )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.pants.pantsColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.pantsColor",
                :preset-colors="fabricColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.pants.legsColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.pantsLegColor",
                :preset-colors="fabricColors",
                disable-fields
              )

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.pants.beltColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.beltColor",
                :preset-colors="fabricColors",
                disable-fields
              )

  row.row-block(tag="fieldset")
    column(size="100%")
      legend {{ $t('canvas.section.avatar.panel.shoes.legend') }}

      row
        column(size="100%")
          label.btn.flat.charcoal(:class="{ active: selection.shoes }")
            | {{ $t('canvas.section.avatar.panel.shoes.shoes') }}
            input(type="checkbox", v-model="selection.shoes")

      row: column(size="100%")
        toggle-row.toggle-input(breakpoint="lg")
          template(v-slot:header)
            column(size="100%-35") {{ $t('canvas.section.avatar.panel.shoes.shoesColor') }}
          template(v-slot:more)
            t-column(size="100%")
              color-picker(
                v-model="selection.shoeColor",
                :preset-colors="fabricColors",
                disable-fields
              )
</template>

<script lang="ts">
import Vue from "vue";
import ColorPicker from "mr-vue-color/src/components/Simple.vue";
import ToggleRow from "../components/toggle-row.vue";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  components: { ColorPicker, ToggleRow },
  data: () => ({
    selection: {},
    colors: { h: 10, s: 0.5, l: 0.2, a: 1 },
    skinColors: ["#e9ceb2", "#daad7f", "#b68450", "#8b653d"],
    skinColors2: ["#e9957b", "#d28d5f", "#916d56", "#705340"],
    fabricColors: [
      "#939393",
      "#515151",
      "#edcb4b",
      "#556f36",
      "#dcdcdc",
      "#ab6483",
      "#646dab",
      "#8d2d2e",
      "#cebea4",
    ],
    hairColors: [
      "#444444",
      "#6d5542",
      "#a34026",
      "#ababab",
      "#135440",
      "#664992",
    ],
    lipsColors: [
      "#e9957b",
      "#d28d5f",
      "#916d56",
      "#705340",
      "#8d2d2e",
      "#2c184c",
      "#181d4c",
      "#111111",
    ],
  }),
  created() {
    this.selection = this.$store.getters.getAvatarSelection;
    this.sunday();
  },
  methods: {
    miguel() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = false;
      this.selection.shirtColor = { hex8: "#515151ff" };
      this.selection.armSleeveColor = { hex8: "#515151ff" };
      this.selection.pantsColor = { hex8: "#556f36ff" };
      this.selection.pantsLegColor = { hex8: "#556f36ff" };
      this.selection.shoeColor = { hex8: "#393939ff" };
      this.selection.armSleeveLengthPercent = 30 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 20 / 100;
      this.selection.pantsFit = 15;
      this.selection.rightPocket = false;
      this.selection.leftPocket = false;
      this.selection.buttons = false;
    },
    dcBoi() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = true;
      this.selection.shirtColor = { hex8: "#646dabff" };
      this.selection.armSleeveColor = { hex8: "#646dabff" };
      this.selection.pantsColor = { hex8: "#939393ff" };
      this.selection.pantsLegColor = { hex8: "#939393ff" };
      this.selection.shoeColor = { hex8: "#393939ff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.armSleeveLengthPercent = 30 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 20 / 100;
      this.selection.pantsFit = 15;
      this.selection.rightPocket = false;
      this.selection.leftPocket = false;
      this.selection.buttons = false;
    },
    sunday() {
      this.selection.shirt = false;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.beard = true;
      this.selection.belt = true;
      this.selection.pantsColor = { hex8: "#dcdcdcff" };
      this.selection.shoeColor = { hex8: "#dcdcdcff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.pantsLegLengthPercent = 0 / 100;
    },
    pooh() {
      this.selection.shirt = true;
      this.selection.pants = false;
      this.selection.shoes = false;
      this.selection.belt = false;
      this.selection.shirtColor = { hex8: "#8d2d2eff" };
      this.selection.armSleeveColor = { hex8: "#8d2d2eff" };
      this.selection.armSleeveLengthPercent = 20 / 100;
      this.selection.shirtLengthPercent = 60 / 100;
      this.selection.pantsLegLengthPercent = 0 / 100;
      this.selection.rightPocket = false;
      this.selection.leftPocket = false;
      this.selection.buttons = false;
    },
    summer() {
      this.selection.shirt = false;
      this.selection.pants = true;
      this.selection.shoes = false;
      this.selection.belt = true;
      this.selection.pantsColor = { hex8: "#8d2d2eff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.armSleeveLengthPercent = 20 / 100;
      this.selection.shirtLengthPercent = 60 / 100;
      this.selection.pantsLegLengthPercent = 0 / 100;
    },
    monday() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = true;
      this.selection.shirtColor = { hex8: "#dcdcdcff" };
      this.selection.armSleeveColor = { hex8: "#dcdcdcff" };
      this.selection.pantsColor = { hex8: "#cebea4ff" };
      this.selection.pantsLegColor = { hex8: "#cebea4ff" };
      this.selection.shoeColor = { hex8: "#515151ff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.pocketColor = { hex8: "#44444440" };
      this.selection.armSleeveLengthPercent = 95 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 100 / 100;
      this.selection.pantsFit = 0;
      this.selection.rightPocket = true;
      this.selection.leftPocket = true;
      this.selection.buttons = true;
    },
    baggy() {
      this.selection.shirt = true;
      this.selection.pants = true;
      this.selection.shoes = true;
      this.selection.belt = false;
      this.selection.shirtColor = { hex8: "#515151ff" };
      this.selection.armSleeveColor = { hex8: "#515151ff" };
      this.selection.pantsColor = { hex8: "#edcb4bff" };
      this.selection.pantsLegColor = { hex8: "#edcb4bff" };
      this.selection.armSleeveLengthPercent = 95 / 100;
      this.selection.shirtLengthPercent = 100 / 100;
      this.selection.pantsLegLengthPercent = 100 / 100;
      this.selection.pantsFit = 15;
      this.selection.rightPocket = false;
      this.selection.leftPocket = false;
      this.selection.buttons = false;
    },
    franciscano() {
      this.selection.shirt = true;
      this.selection.pants = false;
      this.selection.belt = true;
      this.selection.shoes = true;
      this.selection.shirtColor = { hex8: "#402f23ff" };
      this.selection.armSleeveColor = { hex8: "#402f23ff" };
      this.selection.shoeColor = { hex8: "#393939ff" };
      this.selection.beltColor = { hex8: "#515151ff" };
      this.selection.armSleeveLengthPercent = 95 / 100;
      this.selection.shirtLengthPercent = 225 / 100;
      this.selection.rightPocket = false;
      this.selection.leftPocket = false;
      this.selection.buttons = false;
    },
    dyeHair(color) {
      this.selection.beardColor = { hex8: color };
      this.selection.hairColor = { hex8: color };
      this.selection.hairSideColor = { hex8: color };
    },
    tan(color, secondary, lips) {
      this.selection.skinColor = { hex8: color };
      this.selection.skinColor2 = { hex8: secondary };
      this.selection.lipsColor = { hex8: lips };
    },
  },
});
</script>