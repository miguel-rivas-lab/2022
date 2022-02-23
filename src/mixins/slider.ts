import Vue from "vue";
import slider from "../components/slider.vue";

export default Vue.extend({
  components: { slider },
  methods: {
    updateVal(property, newVal) {
      this.selection[property] = parseFloat(newVal);
    },
  },
});
