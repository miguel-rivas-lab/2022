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
    this.$router.push({ name: this.defaultRoute });
  },
});
</script>