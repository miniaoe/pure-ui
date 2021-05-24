import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import AA from "../views/AA.vue";
import Intro from "../views/Doc/intro.docs.md";
import Button from "../views/Doc/button.docs.md";
import Input from "../views/Doc/input.docs.md";
import Radio from "../views/Doc/radio.docs.md";
import CheckBox from "../views/Doc/checkBox.docs.md";
import Message from "../views/Doc/message.docs.md";
import MessageBox from "../views/Doc/messageBox.docs.md";
import Switch from "../views/Doc/switch.docs.md";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/aa", component: AA },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: Intro },
        { path: "button", name: "button", component: Button },
        { path: "input", component: Input },
        { path: "radio", component: Radio },
        { path: "checkbox", component: CheckBox },
        { path: "message", component: Message },
        { path: "message-box", component: MessageBox },
        { path: "switch", component: Switch },
      ],
    },
  ],
});

export default router;
