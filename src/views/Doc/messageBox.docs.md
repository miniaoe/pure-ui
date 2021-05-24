---
wrapperClass: "markdown-body"
---

## message-box 弹框

### 消息提示

用户操作时触发，该对话框需要用户进行手动关闭

```vue demo
<template>
  <Button class="item" @click="onClick">打开 MessageBox</Button>
</template>
<script>
import MessageBox from "../../lib/MessageBox/Index.js";
import Message from "../../lib/Message/Index.js";
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = (type) => {
      MessageBox.alert("消息提示", "这是一段内容", {
        callback: (action) => {
          Message.info("callback:" + action);
        },
      });
    };

    return { onClick };
  },
};
</script>
```

### 确认消息

提示用户确认并询问是否进行此操作时会用到此对话框。

```vue demo
<template>
  <Button class="item" @click="onClick">打开 MessageBox</Button>
</template>
<script>
import MessageBox from "../../lib/MessageBox/Index.js";
import Message from "../../lib/Message/Index.js";
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = (type) => {
      MessageBox.confirm("消息提示", "这是一段内容")
        .then(() => {
          Message.success("你点击了确认");
        })
        .catch(() => {
          Message.warning("你点击了取消");
        });
    };

    return { onClick };
  },
};
</script>
```

### 提交内容

当用户进行操作触发，提示用户进行输入的对话框。

```vue demo
<template>
  <Button class="item" @click="onClick">打开 MessageBox</Button>
</template>
<script>
import MessageBox from "../../lib/MessageBox/Index.js";
import Message from "../../lib/Message/Index.js";
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = (type) => {
      MessageBox.prompt("消息提示", "输入一段文字看看", {
        placeholder: "你想输入点什么？",
      })
        .then((value) => {
          Message.success(`你输入了 ${value}`);
        })
        .catch(() => {
          Message.warning("你点击了取消");
        });
    };

    return { onClick };
  },
};
</script>
```

### 参数列表

| 参数            | 说明                 | 可选值                   |
| --------------- | -------------------- | ------------------------ |
| boxType         | 弹框类型             | alert / confirm / prompt |
| title           | 弹窗标题             | String                   |
| content         | 弹框显示内容         | String                   |
| cancelText      | 取消按钮文字         | String                   |
| doneText        | 确认按钮文字         | String                   |
| showCancel      | 是否显示取消按钮     | Boolean                  |
| showClose       | 是否显示关闭按钮     | Boolean                  |
| clickShadeClose | 点击遮罩是否关闭弹框 | Boolean                  |
| placeholder     | prompt 输入框占位符  | String                   |
| callback        | alert 回调函数       | Function                 |
