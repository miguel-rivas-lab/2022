<script lang="ts">
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartData: {
      type: Array,
    },
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  }),
  methods: {
    render(): void {
      const orgData = this.chartData.sort((a, b) => {
        let ca = a.date;
        let cb = b.date;
        return ca - cb;
      });
      const dates = orgData.map((d) => `${d.date.slice(0, 4)}`);
      const totals = orgData.map((d) => d.total);

      this.renderChart(
        {
          labels: dates,
          datasets: [
            {
              data: totals,
              borderColor: "hsl(155deg 50% 25% / 0.5)",
              pointBackgroundColor: "hsl(155deg 50% 50%)",
              backgroundColor: "hsl(155deg 50% 50%)",
            },
          ],
        },
        this.options
      );
    },
  },
  watch: {
    chartData: function (): void {
      this.render();
    },
  },
  mounted(): void {
    this.render();
  },
  beforeDestroy(): void {
    this.render = () => {
      // remove render loop
    };
  },
};
</script>