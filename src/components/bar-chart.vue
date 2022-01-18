<script lang="ts">
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
        let ca = a.skill.toUpperCase();
        let cb = b.skill.toUpperCase();

        if (ca < cb) {
          return -1;
        }
        if (ca > cb) {
          return 1;
        }

        return 0;
      });
      const dates = orgData.map((d) => d.skill);
      const totals = orgData.map((d) => d.total);

      this.renderChart(
        {
          labels: dates,
          datasets: [
            {
              data: totals,
              backgroundColor: "hsl(50deg 50% 50%)",
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