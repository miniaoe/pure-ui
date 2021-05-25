## radio 单选框

### 基础用法

```vue demo
<template>
  <Radio class="item" v-model="radio" :label="1">选项1</Radio>
  <Radio class="item" v-model="radio" :label="2">选项2</Radio>
  <Radio class="item" v-model="radio" :label="3">选项3</Radio>
</template>

<script>
import { ref } from "vue";
import Radio from "../../lib/Radio/Index.vue";
export default {
  components: {
    Radio,
  },
  setup() {
    const radio = ref(1);
    return { radio };
  },
};
</script>
```

### 禁用状态

单选框无法进行点击

```vue demo
<template>
  <Radio class="item" v-model="radio" :label="1" disabled>选项1</Radio>
  <Radio class="item" v-model="radio" :label="2" disabled>选项2</Radio>
  <Radio class="item" v-model="radio" :label="3">选项3</Radio>
</template>

<script>
import { ref } from "vue";
import Radio from "../../lib/Radio/Index.vue";
export default {
  components: {
    Radio,
  },
  setup() {
    const radio = ref(1);
    return { radio };
  },
};
</script>
```

### 参数列表

| 参数            | 说明           | 可选值                    |
| --------------- | -------------- | ------------------------- |
| value / v-model | 绑定值         | -                         |
| label           | radio 的 value | Number / String / Boolean |
| disabled        | 是否禁用       | true / false              |
