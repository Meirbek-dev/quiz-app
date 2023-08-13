<script setup>
import { RouterLink } from "vue-router";
// eslint-disable-next-line
const { quizQuestionsLength, numberOfCorrectAnswers } = defineProps([
  "quizQuestionsLength",
  "numberOfCorrectAnswers",
]);
</script>

<template>
  <div class="results">
    <p>Your Results:</p>
    <h1>{{ numberOfCorrectAnswers }} / {{ quizQuestionsLength }}</h1>
    <RouterLink to="/">
      <Button id="goBackButton">Go Back</Button>
    </RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 100px 0px;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}

#goBackButton {
  margin-top: 20px;
  width: 220px;
  height: 50px;
  border: none;
  text-decoration: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 0;
  border-radius: 10px;
}

#goBackButton:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

#goBackButton:active {
  color: #000;
}

#goBackButton:active:after {
  background: transparent;
}

#goBackButton:hover:before {
  opacity: 1;
}

#goBackButton:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}
</style>
