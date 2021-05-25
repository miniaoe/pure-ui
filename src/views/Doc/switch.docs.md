## switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### **基础用法**

```vue demo
<template>
  <Switch class="item">默认按钮</Switch>
</template>

<script>
import Switch from "../../lib/Switch/Index.vue";
export default {
  components: {
    Switch,
  },
  setup() {},
};
</script>
```

### **文字用法**

```vue demo
<template>
  <Switch active-text="年付费" close-text="月付费" />
</template>

<script>
import Switch from "../../lib/Switch/Index.vue";
export default {
  components: {
    Switch,
  },
  setup() {},
};
</script>
```

### **禁用状态**

```vue demo
<template>
  <Switch disabled />
</template>

<script>
import Switch from "../../lib/Switch/Index.vue";
export default {
  components: {
    Switch,
  },
  setup() {},
};
</script>
```

### **自定义状态颜色**

```vue demo
<template>
  <Switch closeColor="rgb(19, 206, 102)" activeColor="rgb(255, 73, 73)" />
</template>

<script>
import Switch from "../../lib/Switch/Index.vue";
export default {
  components: {
    Switch,
  },
  setup() {},
};
</script>
```

### 参数列表

| 参数            | 说明       | 可选值        |
| --------------- | ---------- | ------------- |
| value / v-model | 绑定值     | -             |
| activeColor     | 开状态颜色 | String[color] |
| closeColor      | 关状态颜色 | String[color] |
| width           | 开关宽度   | Number        |
| disabled        | 是否禁用   | Boolean       |
| activeText      | 开状态文本 | String        |
| closeText       | 关状态文本 | String        |
