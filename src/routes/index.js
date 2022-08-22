import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";

export default createRouter({
  history: createWebHashHistory(),
  // pages 페이지를 구분
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Movie/:id",
      component: Movie,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
