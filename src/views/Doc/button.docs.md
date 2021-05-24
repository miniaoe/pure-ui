---
wrapperClass: "markdown-body"
---

## button 按钮

### **基础用法**

基础的按钮用法

```vue demo
<template>
  <Button class="item">默认按钮</Button>
  <Button class="item" theme="primary">主要按钮</Button>
  <Button class="item" theme="secondary">次要按钮</Button>
  <Button class="item" theme="danger">危险按钮</Button>
</template>

<script>
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>
```

### 禁用状态

按钮不可用状态

```vue demo
<template>
  <Button class="item" disabled>默认按钮</Button>
  <Button class="item" theme="primary" disabled>主要按钮</Button>
  <Button class="item" theme="secondary" disabled>次要按钮</Button>
  <Button class="item" theme="danger" disabled>危险按钮</Button>
</template>

<script>
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>
```

### 文字按钮

文字与链接按钮

```vue demo
<template>
  <Button class="item" theme="text" disabled>文字按钮</Button>
  <Button class="item" theme="link" disabled>链接按钮</Button>
</template>

<script>
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>
```

### 加载中

加载中不可用按钮

```vue demo
<template>
  <Button class="item" loading>默认按钮</Button>
  <Button class="item" theme="primary" loading>主要按钮</Button>
  <Button class="item" theme="secondary" loading>次要按钮</Button>
  <Button class="item" theme="danger" loading>危险按钮</Button>
</template>

<script>
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>
```

### 不同尺寸

不同尺寸按钮，除默认尺寸外，提供额外两种

```vue demo
<template>
  <Button class="item" theme="primary" size="large">主要按钮</Button>
  <Button class="item" theme="primary">主要按钮</Button>
  <Button class="item" theme="primary" size="small">主要按钮</Button>
</template>

<script>
import Button from "../../lib/Button/Index.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>
```

### 参数列表

| 参数     | 说明         | 可选值                                 |
| -------- | ------------ | -------------------------------------- |
| theme    | 按钮主题类型 | default / primary / secondary / danger |
| disabled | 按钮禁用状态 | true / false                           |
| loading  | 按钮加载状态 | true / false                           |
| size     | 按钮大小类型 | normal / large / small                 |
