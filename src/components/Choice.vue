<template>
  <li class="select-none rounded-lg px-3 py-1 my-1 bg-dark-room" :class="style">
    <span class="box-decoration-clone" v-katex:auto>{{ data?.choice }}</span>
  </li>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { IChoice } from '@/types'

export default {
  name: 'ChoiceItem',
  props: {
    data: {
      type: Object as PropType<IChoice>,
      required: true
    },
    showResult: { type: Boolean, required: false },
    disableInteraction: { type: Boolean, required: false }
  },
  computed: {
    style() {
      var style = []

      if (this.showResult) {
        if (this.data.answer === this.data.id) {
          style.push('grad-choice')
        }
        if (this.data.solution === this.data.id) {
          if (this.data.answer === undefined) {
            style.push('grad-wrong')
          } else {
            style.push('grad-correct')
          }
        }
        if (this.data.answer === this.data.id && this.data.solution !== this.data.id) {
          style.push('grad-wrong')
        }
      } else {
        style.push('cursor-pointer hover:bg-dark-room hover:bg-opacity-60')
      }
      return style.join(' ')
    }
  }
}
</script>
