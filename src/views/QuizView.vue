<script setup>
import Question from "../components/QuestionsForm.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/ResultForm.vue";
import quizzes from "../data/quizzes.json";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const quizId = parseInt(route.params.id);
const currentQuestionIndex = ref(0);
const showResults = ref(false);
const numberOfCorrectAnswers = ref(0);
const quiz = quizzes.find((q) => q.id === quizId);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const quizProgress = computed(
  () => `${Math.floor((currentQuestionIndex.value / quiz.questions.length) * 100)}%`
);

const onOptionSelected = (isCorrect) =>
{
  if (isCorrect) numberOfCorrectAnswers.value++;
  if (currentQuestionIndex.value === quiz.questions.length - 1) showResults.value = true;
  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader :questionStatus=" questionStatus " :quizProgress=" quizProgress " />
    <div>
      <Question v-if=" !showResults " @selectOption=" onOptionSelected "
        :question=" quiz.questions[ currentQuestionIndex ] " />
      <Result v-else :quizQuestionsLength=" quiz.questions.length " :numberOfCorrectAnswers=" numberOfCorrectAnswers " />
    </div>
  </div>
</template>

<style scoped>
</style>
