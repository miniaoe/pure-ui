import { createApp, h } from "vue";
import MessageBox from "./Index.vue";

const onClose = () => child.remove();
let child = null;
function createMessageBox(options) {
  const el = document.createElement("div");
  const vm = createApp({
    render() {
      return h(MessageBox, options);
    },
  });
  vm.mount(el);
  child = el.firstElementChild;
  document.body.appendChild(child);
}

const onMessageBox = {};
onMessageBox.alert = (title, content, options = {}) => {
  const obj = {
    boxType: "alert",
    title,
    content,
    onClose,
    ...options,
  };
  createMessageBox(obj);
};

const onMessagePromise = (options) => {
  return new Promise((resolve, reject) => {
    const obj = {
      onCancel: (err) => {
        reject(err);
      },
      onDone: (res) => {
        resolve(res);
      },
      ...options,
    };
    createMessageBox(obj);
  });
};

onMessageBox.confirm = (title, content, options = {}) => {
  const obj = {
    boxType: "confirm",
    title,
    content,
    onClose,
    showCancel: true,
    ...options,
  };
  return onMessagePromise(obj);
};
onMessageBox.prompt = (title, content, options = {}) => {
  const obj = {
    boxType: "prompt",
    title,
    content,
    onClose,
    showCancel: true,
    ...options,
  };
  return onMessagePromise(obj);
};

export default onMessageBox;
