<template>
  <div class="flex flex-row gap-2">
    <button class="arrow-button" aria-label="Previous Question" @click="prevQuestion">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-big-left-filled"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
          stroke-width="0"
        />
      </svg>
    </button>
    <button class="arrow-button" aria-label="Next Question" @click="nextQuestion">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-big-right-filled"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
          stroke-width="0"
        />
      </svg>
    </button>
  </div>
  <div class="flex flex-row gap-2 [&>span]:font-bold [&>span]:text-sm">
    <span class="text-gray-light">{{ questionIdx + 1 }} / {{ questions.length }}</span>
    <span class="text-green">{{ hits }}</span>
    <span class="text-red">{{ fails }}</span>
  </div>
  <Question
    @set-answer="setAnswer"
    :data="{
      id: questionIdx,
      title: question.title,
      choices: question.choices,
      solution: question.solution,
      answer
    }"
  />
</template>

<script lang="ts">
import { randomizeQuestions } from '@/utils'
import Question from '@/components/Question.vue'
import type { IQuestion } from '@/types'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const questionIdx = import.meta.env.PROD ? 0 : 0

export default {
  data() {
    return {
      questionIdx,
      hits: 0,
      fails: 0
    }
  },
  methods: {
    nextQuestion() {
      this.questionIdx = this.questionIdx + 1 >= this.questions.length ? 0 : this.questionIdx + 1
    },
    prevQuestion() {
      this.questionIdx = this.questionIdx - 1 < 0 ? this.questions.length - 1 : this.questionIdx - 1
    },
    setAnswer(answer: number) {
      this.answers[this.realIdx] = answer
      this.question.solution === answer ? this.hits++ : this.fails++
    }
  },
  computed: {
    realIdx() {
      return this.questionsOrder[this.questionIdx]
    },
    questions() {
      return this.$tm('questions') as IQuestion[]
    },
    question() {
      return this.questions[this.realIdx]
    },
    answer() {
      return this.answers[this.realIdx]
    }
  },
  components: {
    Question
  },
  mounted() {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'd':
        case 'ArrowRight':
          this.nextQuestion()
          break

        case 'a':
        case 'ArrowLeft':
          this.prevQuestion()
          break
      }
    })
  },
  setup() {
    const { tm } = useI18n()
    const questionsAmount = tm('questions').length

    return {
      answers: ref(Array<number>(questionsAmount)),
      questionsOrder: randomizeQuestions(questionsAmount)
    }
  }
}
</script>
