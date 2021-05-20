import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/doc", component: Doc },
  ],
});

export default router;
