## checkbox 多选框

### 基础用法

```vue demo
<template>
  <CheckBox class="item" v-model="checkbox" :label="1">选项1</CheckBox>
  <CheckBox class="item" v-model="checkbox" :label="2">选项2</CheckBox>
  <CheckBox class="item" v-model="checkbox" :label="3">选项3</CheckBox>
</template>

<script>
import { ref } from "vue";
import CheckBox from "../../lib/CheckBox/Index.vue";
export default {
  components: {
    CheckBox,
  },
  setup() {
    const checkbox = ref([]);
    return { checkbox };
  },
};
</script>
```

### 禁用状态

单选框无法进行点击

```vue demo
<template>
  <CheckBox class="item" v-model="checkbox" :label="1" disabled>选项1</CheckBox>
  <CheckBox class="item" v-model="checkbox" :label="2" disabled>选项2</CheckBox>
  <CheckBox class="item" v-model="checkbox" :label="3">选项3</CheckBox>
</template>

<script>
import { ref } from "vue";
import CheckBox from "../../lib/CheckBox/Index.vue";
export default {
  components: {
    CheckBox,
  },
  setup() {
    const checkbox = ref([]);
    return { checkbox };
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
