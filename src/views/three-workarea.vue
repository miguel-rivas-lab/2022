<template lang="pug">
router-view(name="workarea2")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  created() {
    this.$router.push({ name: 'cube' });
  },
});
</script>