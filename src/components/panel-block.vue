<template>
  <row tag="fieldset" class="row-block">
    <column size="100%">
      <legend>
        <row>
          <column size="100%-35">
            <btn
                :color="color"
                size="md"
                @click="toggleBlockVisibility()"
                :text="title"
              />
          </column>
          <suffix size="35">
            <btn
                color="persian-red"
                size="md"
                glyph="close"
                title="Remove button"
                @click="removeBlock"
              />
          </suffix>
        </row>
      </legend>
      <transition name="slide-fade">
        <div class="column-content" v-if="blockVisibility">
          <slot />
        </div>
      </transition>
    </column>
  </row>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    props: {
      title: {
        type: String,
        default: "",
      },
      color: {
        type: String,
        default: 'gravel',
      }
    },
    data: () => ({
      blockVisibility: false,
    }),
    created() {
      this.$emit('created');
    },
    methods: {
      removeBlock($event) {
        this.$emit('onRemove', $event);
      },
      toggleBlockVisibility() {
        this.blockVisibility = !this.blockVisibility;
      }
    }
  });
</script>