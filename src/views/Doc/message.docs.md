---
wrapperClass: "markdown-body"
---

## message 消息提示

### 基础用法

顶部出现，2.5 秒后消失

```vue demo
<template>
  <Button class="item" @click="onClick">打开 Message</Button>
</template>
<script>
import Message from "../../lib/Message/Index.js";
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = (type) => {
      Message.info(`这是一条消息提示`);
    };

    return { onClick };
  },
};
</script>
```

### 不同类型

```vue demo
<template>
  <Button class="item" @click="onClickInfo">消息</Button>
  <Button class="item" @click="onClickSuccess">成功</Button>
  <Button class="item" @click="onClickWarning">警告</Button>
  <Button class="item" @click="onClickDanger">错误</Button>
</template>
<script>
import Message from "../../lib/Message/Index.js";
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClickInfo = () => {
      Message.info(`这是一条消息提示`);
    };
    const onClickSuccess = () => {
      Message.success(`这是一条成功提示`);
    };
    const onClickWarning = () => {
      Message.warning(`这是一条警告提示`);
    };
    const onClickDanger = () => {
      Message.danger(`这是一条错误提示`);
    };

    return { onClickInfo, onClickSuccess, onClickWarning, onClickDanger };
  },
};
</script>
```

### 可关闭

显示关闭按钮，可手动提前关闭

```vue demo
<template>
  <Button class="item" @click="onClickInfo">消息</Button>
  <Button class="item" @click="onClickSuccess">成功</Button>
  <Button class="item" @click="onClickWarning">警告</Button>
  <Button class="item" @click="onClickDanger">错误</Button>
</template>
<script>
import Message from "../../lib/Message/Index.js";
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClickInfo = () => {
      Message.info({
        message: "这是一条消息提示",
        duration: 5000,
        showClose: true,
      });
    };
    const onClickSuccess = () => {
      Message.success({
        message: "这是一条成功提示",
        duration: 5000,
        showClose: true,
      });
    };
    const onClickWarning = () => {
      Message.warning({
        message: "这是一条警告提示",
        duration: 5000,
        showClose: true,
      });
    };
    const onClickDanger = () => {
      Message.danger({
        message: "这是一条错误提示",
        duration: 5000,
        showClose: true,
      });
    };

    return { onClickInfo, onClickSuccess, onClickWarning, onClickDanger };
  },
};
</script>
```

### 参数列表

| 参数      | 说明             | 可选值                            |
| --------- | ---------------- | --------------------------------- |
| type      | 消息提示类型     | success / info / warning / danger |
| message   | 消息文字         | String                            |
| offset    | 窗口偏移量       | Number                            |
| onClose   | 手动关闭回调函数 | Function                          |
| showClose | 是否显示关闭按钮 | Boolean                           |
