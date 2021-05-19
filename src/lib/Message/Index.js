import { createVNode, render } from "vue";
import Message from "./Index.vue";

let seed = 1;
const instance = [];

class onMessage {
  info(message) {
    onCreate("info", message);
  }
  success(message) {
    onCreate("success", message);
  }
  warning(message) {
    onCreate("warning", message);
  }
  danger(message) {
    onCreate("danger", message);
  }
}

function onCreate(type, params) {
  if (typeof params === "object") {
    createMessage({ type, ...params });
  }
  if (typeof params === "string") {
    createMessage({ type, message: params });
  }
}

function createMessage({ type, message, duration, showClose }) {
  let closeTime = duration || 2500;
  const id = "message-" + seed++;
  const container = document.createElement("div");

  let offset = 20;
  instance.forEach((val) => {
    offset += val.el.offsetHeight + 16;
  });

  const options = {
    type,
    message,
    id,
    offset,
    onClose: (id) => {
      close(id);
    },
    showClose: showClose || false,
  };
  const vm = createVNode(Message, options);
  render(vm, container);
  instance.push(vm);
  const firstChild = container.firstElementChild;
  document.body.appendChild(firstChild);
  setTimeout(() => close(firstChild.id), closeTime);
}

function close(id) {
  const idx = instance.findIndex((val) => {
    const { id: _id } = val.component.props;
    return id === _id;
  });
  if (idx === -1) return;

  const vm = instance[idx];
  if (!vm) return;
  instance.splice(idx, 1);
  removeElement(id);

  const removedHeight = vm.el.offsetHeight;
  const length = instance.length;
  if (length < 1) return;
  for (let i = idx; i < length; i++) {
    const pos = parseInt(instance[i].el.style["top"], 10) - removedHeight - 16;
    instance[i].component.props.offset = pos;
  }
}

function removeElement(id) {
  const el = document.getElementById(id);
  el.style.top = "-100%";
  setTimeout(() => el.remove(), 1000);
}

export default new onMessage();
