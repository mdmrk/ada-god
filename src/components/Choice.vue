<template>
  <li class="select-none rounded-xl px-3 py-1 my-1 bg-dark-room" :class="style">
    <span class="box-decoration-clone" v-katex:auto v-html="data?.choice"></span>
  </li>
</template>

<script lang="ts">
import type { IChoice } from "@/types"
import type { PropType } from "vue"

export default {
  name: "ChoiceItem",
  props: {
    data: {
      type: Object as PropType<IChoice>,
      required: true,
    },
  },
  computed: {
    style() {
      const style = []

      if (this.data.answer !== undefined) {
        style.push("pointer-events-none")
        if (this.data.answer === this.data.id) {
          style.push("grad-choice")
        }
        if (this.data.solution === this.data.id) {
          if (this.data.answer === undefined) {
            style.push("grad-wrong")
          } else {
            style.push("grad-correct")
          }
        }
        if (
          this.data.answer === this.data.id &&
          this.data.solution !== this.data.id
        ) {
          style.push("grad-wrong")
        }
      } else {
        style.push("cursor-pointer hover:bg-dark-room hover:bg-opacity-60")
        if (this.data.selection === this.data.id) {
          style.push("grad-choice-light")
        }
      }
      return style.join(" ")
    },
  },
}
</script>
