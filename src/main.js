// ..src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";
import loadImage from "./plugins/loadImage";

// use() : 플러그인 연결할 때 사용하는 메소드
createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount("#app");
