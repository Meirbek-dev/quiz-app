import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/HomeView.vue";
import './assets/main.css'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: () => import("./views/QuizView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
