<template>
  <div class="flex flex-col gap-2">
    <span class="font-bold text-white" v-katex:auto v-html="title"></span>
    <ul class="list-none">
      <Choice
        v-for="(choice, index) in data.choices"
        @click="setChoice(index)"
        :key="index"
        :data="{ id: index, choice, solution: data!.solution, answer: data.answer }"
        :showResult="showResult"
        :disableInteraction="disableInteraction"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Choice from '@/components/Choice.vue'
import type { IQuestion } from '@/types'
import type { PropType } from 'vue'

export default {
  name: 'QuestionItem',
  props: {
    data: { type: Object as PropType<IQuestion>, required: true },
    showResult: { type: Boolean, required: false, default: false },
    disableInteraction: { type: Boolean, required: false, default: false },
    index: { type: Number, required: false, default: null }
  },
  computed: {
    title() {
      return (this.index ? `${this.index}. ` : '') + this.data?.title
    }
  },
  methods: {
    setChoice(choice: number) {
      if ((this.data.answer !== undefined && this.showResult) || this.disableInteraction) return
      this.$emit('setChoice', choice)
    }
  },
  components: {
    Choice
  },
  emits: {
    setChoice(choice: number) {
      return choice >= 0 && choice <= 3
    }
  }
}
</script>
