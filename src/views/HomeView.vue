<script setup>
import q from "../data/quizzes.json";
import { ref, watch } from "vue";
import Card from "../components/QuizCard.vue";
import ContactInfo from "../components/ContactInfo.vue";
import gsap from "gsap";

const quizzes = ref(q);
const search = ref("");

watch(search, () =>
{
  quizzes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const beforeEnter = (el) =>
{
  el.style.transform = "translateY(-60px)";
  el.style.opacity = "0";
};

const enter = (el) =>
{
  gsap.to(el, {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: el.dataset.index * 0.2,
  });
};

</script>

<template>
  <header>
    <h1>Quizzes</h1>
    <input v-model.trim=" search " type="text" placeholder="Search..." />
  </header>
  <div class="cards-container">
    <TransitionGroup @before-enter=" beforeEnter " @enter=" enter " appear>
      <Card v-for="   quiz    in    quizzes   " :quiz="quiz" :key=" quiz.id " />
    </TransitionGroup>
  </div>
  <ContactInfo />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Asap&family=Roboto:ital,wght@0,500;0,900;1,500&display=swap");

header {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: left;
  align-items: center;
}

header h1 {
  font-size: 60px;
  font-weight: 600;
  color: transparent;
  background-image: linear-gradient(to right,
      #553c9a,
      #ee4b2b,
      #00c2cb,
      #ff7f50,
      #553c9a);
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 200%;
  background-position: -200%;
  animation: animated-gradient 7s infinite alternate-reverse;
}

@keyframes animated-gradient {
  to {
    background-position: 200%;
  }
}

header input {
  margin-top: 20px;
  padding: 10px;
  border-radius: 2%;
  border: none;
  font-size: 1.2rem;
  background-color: rgba(128, 128, 128, 0.1);
}

.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 35px;
  gap: 1.5rem;
}
</style>
