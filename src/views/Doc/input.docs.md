## input 输入框

> input 通常应处理 `input` 事件，并更新组件绑定值（v-model）

### 基础用法

```vue demo
<template>
  <Input class="item" type="text" />
  <Input class="item" type="text" theme="secondary" />
  <Input class="item" type="text" theme="danger" />

  <div style="margin-top: 1rem;">
    <span>双向绑定</span> 你输入的值为:{{ value }} <br />
    <Input v-model="value" class="item" type="text" />
  </div>
</template>
<script>
import { ref } from "vue";
import Input from "../../lib/Input/Index.vue";
export default {
  components: {
    Input,
  },
  setup() {
    const value = ref("");
    return { value };
  },
};
</script>
```

### 禁用状态

```vue demo
<template>
  <Input class="item" type="text" disabled />
</template>
<script>
import Input from "../../lib/Input/Index.vue";
export default {
  components: {
    Input,
  },
  setup() {},
};
</script>
```

### 密码框

```vue demo
<template>
  <Input class="item" type="password" />
</template>
<script>
import Input from "../../lib/Input/Index.vue";
export default {
  components: {
    Input,
  },
  setup() {},
};
</script>
```

### 文本域

多行文本输入，通过原生 `type` 属性来指定

```vue demo
<template>
  <Input class="item" type="textarea" />
  <Input class="item" type="textarea" :rows="2" />
</template>
<script>
import Input from "../../lib/Input/Index.vue";
export default {
  components: {
    Input,
  },
  setup() {},
};
</script>
```

### 不同尺寸

```vue demo
<template>
  <Input class="item" type="text" size="large" />
  <Input class="item" type="text" />
  <Input class="item" type="text" size="small" />
</template>
<script>
import Input from "../../lib/Input/Index.vue";
export default {
  components: {
    Input,
  },
  setup() {},
};
</script>
```

### 占位符

```vue demo
<template>
  <Input class="item" type="text" placeholder="这是一个占位符" />
</template>
<script>
import Input from "../../lib/Input/Index.vue";
export default {
  components: {
    Input,
  },
  setup() {},
};
</script>
```

### 输入长度限制

```vue demo
<template>
  <Input
    class="item"
    type="text"
    placeholder="最多输入5个字符"
    :maxlength="5"
  />
</template>
<script>
import Input from "../../lib/Input/Index.vue";
export default {
  components: {
    Input,
  },
  setup() {},
};
</script>
```

### 参数列表

| 参数            | 说明                    | 可选值                          |
| --------------- | ----------------------- | ------------------------------- |
| value / v-model | 绑定值                  | -                               |
| type            | 按钮类型，支持原生 type | text / textarea 和其他原生 type |
| theme           | 按钮皮肤                | primary / secondary / danger    |
| size            | 按钮大小                | normal / large / small          |
| placeholder     | 占位符                  | String                          |
| readonly        | 只读模式                | true / false                    |
| disabled        | 是否禁用                | true / false                    |
| rows            | textarea 行数           | Number                          |
| maxlength       | 最大输入长度            | Number                          |
| minlength       | 最小输入长度            | Number                          |
