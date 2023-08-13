<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";
/* eslint-disable */
const router = useRouter();
const { quiz } = defineProps(['quiz']);

const navigateToQuiz = () =>
{
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div class="card" @click=" navigateToQuiz ">
    <img :src=" quiz.img " :alt=" quiz.name " />
    <div class="card-info">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  overflow: hidden;
  border-radius: 2%;
  margin-bottom: 5px;
  margin-right: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 300px;
}

.card img {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 150px;
  border: solid white;
  margin: 0;
}

.card-info {
  padding: 0 10px 10px;
}

.card .card-info h2 {
  font-weight: bold;
}
</style>
