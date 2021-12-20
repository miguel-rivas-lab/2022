<script lang="ts">
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    chartData: {
      type: Number,
    },
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  }),
  computed: {
    colorsData() {
      let result = { colors: [], labels: [], values: [] };
      for (let counter = 0; counter < this.chartData; counter++) {
        result.labels.push(`Color #${counter + 1}`);
        result.values.push(1);
        result.colors.push(this.createColor(counter, this.chartData));
      }
      return result;
    },
  },
  mounted() {
    this.render();
  },
  watch: {
    colorsData: function () {
      this.render();
    },
  },
  methods: {
    createColor(index: number, max_color_amount: number) {
      var hue, difference, filter_max_color, filter_min_color;
      filter_max_color = max_color_amount > 359 ? 359 : max_color_amount;
      filter_min_color = filter_max_color < 3 ? 3 : filter_max_color;
      max_color_amount = filter_min_color;

      difference = 360 / max_color_amount;
      hue = (index * difference).toFixed(1);
      return `hsl(${hue}, 59%, 51%)`;
    },
    render() {
      this.renderChart(
        {
          labels: this.colorsData.labels,
          datasets: [
            {
              data: this.colorsData.values,
              backgroundColor: this.colorsData.colors,
              borderColor: "transparent",
            },
          ],
        },
        this.options
      );
    },
    beforeDestroy() {
      this.render = () => {
        // remove render loop
      };
    },
  },
};
</script>