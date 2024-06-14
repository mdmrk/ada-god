<template>
  <div class="flex flex-col gap-2">
    <p class="question-title" v-katex:auto v-html="data.title"></p>
    <ul>
      <Choice v-for="(choice, index) in data.choices" :key="data.id + index" :data="{
        id: index,
        choice,
        solution: data.solution,
        answer: data.answer,
        selection: data.selection
      }" @click="setAnswer(index)" />
    </ul>
  </div>
</template>

<script lang="ts">
import Choice from "@/components/Choice.vue"
import type { IQuestion } from "@/types"
import type { PropType } from "vue"

export default {
  name: "QuestionItem",
  data() {
    return { answerValue: -1 }
  },
  props: {
    data: { type: Object as PropType<IQuestion>, required: true },
  },
  methods: {
    setAnswer(answer: number) {
      this.$emit("setAnswer", answer)
    },
  },
  computed: {
    answer(): number | undefined {
      return this.answerValue > -1 ? this.answerValue : undefined
    },
  },
  components: {
    Choice,
  },
  emits: {
    setAnswer(answer: number) {
      return answer >= 0
    },
  },
}
</script>
