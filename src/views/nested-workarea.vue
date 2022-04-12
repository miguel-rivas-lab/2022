<template lang="pug">
router-view(name="workarea2")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    defaultRoute: {
      type: String,
      default: "",
    },
  },
  created() {
    if (this.$route.name !== this.defaultRoute) {
      this.$router.push({ name: this.defaultRoute });
    }
  },
});
</script>