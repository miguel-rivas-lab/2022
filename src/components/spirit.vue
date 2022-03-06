<template lang="pug">
.spirit-code
  code(ref="code", v-html="textFormat")
</template>

<script lang="ts">
import Vue from "vue";

const spirit = (word: string, klaso: string) => {
  return `<span class='sp-${klaso}'>${word}</span>`;
};

const spiritBegin = (klaso: string) => {
  return `<span class='sp-${klaso}'>`;
};

const spiritEnd = () => {
  return `</span>`;
};

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  //(?<=\<[a-z]{1,})  ---- look for space after tag-name
  // (?<=\<)\/ --- end tag begining
  computed: {
    textFormat() {
      return this.text
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\//g, "&#47;")

        .replace(/\n/g, "<br>")
        .replace(/\s/g, "&nbsp;")

        .replace(
          /(\=\")/g,
          "&#61;" + spirit("&#34;", "quote") + spiritBegin("value")
        )
        .replace(/(\")/g, spiritEnd() + spirit("&#34;", "quote"))
        .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("attr"))

        .replace(/(?<=&lt;)&#47;/g, spirit("&#47;", "tag"))
        .replace(/&lt;/g, spirit("&lt;", "tag"))
        .replace(/&#47;(?=&gt;)/g, spiritEnd() + spirit("&#47;", "tag"))
        .replace(/&gt;/g, spiritEnd() + spirit("&gt;", "tag"))
    },
  },
});
</script>