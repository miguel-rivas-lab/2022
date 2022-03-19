<template>
  <aside class="modal" :class="{ 'hidden-modal': modal.hidden }">
    <div class="modal-bk" v-on:click.self="closeModal">
      <div
        class="modal-body"
        v-bind:style="{ width: `${width}px`, maxWidth: `100%` }"
      >
        <div class="modal-header">
          <row>
            <column size="100%-35">
              <slot name="header" />
            </column>
            <column size="35">
              <btn color="persian-red" glyph="close" @click="closeModal" />
            </column>
          </row>
        </div>
        <scroll-area color="royal-purple">
          <slot name="body" />
        </scroll-area>
        <div class="modal-footer">
          <btn color="gold-tips" :text="ctaCaption" @click="closeModal" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    width: {
      type: Number,
      default: 800,
    },
    ctaCaption: {
      type: String,
      default: "Close Modal",
    },
  },
  data: () => ({
    modal: {},
  }),
  mounted() {
    this.modal = this.$store.getters.getModal;
  },
  methods: {
    closeModal() {
      this.modal.hidden = true;
    },
  },
});
</script>