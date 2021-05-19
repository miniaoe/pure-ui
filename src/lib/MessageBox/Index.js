import { createVNode, render } from "vue";
import MessageBox from "./Index.vue";

let child = null;
const close = () => child.remove();
function createMessageBox(options) {
  const el = document.createElement("div");
  const vm = createVNode(MessageBox, options);
  render(vm, el);
  child = el.firstElementChild;
  document.body.appendChild(child);
}

class onMessageBox {
  alert(title, content, options = {}) {
    createMessageBox({ title, content, ...options, onClose: close });
  }

  confirm(title, content, options = {}) {
    return new Promise((resolve, reject) => {
      const onCancel = () => {
        close();
        reject();
      };
      const onOk = () => {
        resolve();
      };
      createMessageBox({
        title,
        content,
        onClose: onCancel,
        onCancel,
        onOk,
        showCancel: true,
        ...options,
      });
    });
  }

  prompt(title, content, options) {
    return new Promise((resolve, reject) => {
      const onCancel = (err) => {
        close();
        reject(err);
      };
      const onOk = (val) => {
        resolve(val);
      };
      createMessageBox({
        title,
        content,
        onClose: onCancel,
        onCancel,
        onOk,
        showCancel: true,
        prompt: true,
        ...options,
      });
    });
  }
}

export default new onMessageBox();
