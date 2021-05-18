<template>
  <div class="main">
    <h3>按钮</h3>
    <div>
      <Button>DEFAULT</Button>
      <Button theme="primary">PRIMARY</Button>
      <Button theme="secondary">SECONDARY</Button>
      <Button theme="danger">DANGER</Button>
    </div>
    <h3>按钮大小</h3>
    <div>
      <Button size="large">LARGE</Button>
      <Button>NORMAL</Button>
      <Button size="small">SMALL</Button>
    </div>
    <div>
      <h3>文字按钮</h3>
      <Button theme="text">TEXT</Button>
      <Button theme="link">LINK</Button>
    </div>
    <div>
      <h3>禁用 加载中按钮</h3>
      <Button disabled>DISABLED</Button>
      <Button loading>LOADING</Button>
    </div>

    <div>
      <h3>滑块按钮</h3>
      <Switch /> <br />
      <p>带文字的选项的滑块</p>
      <Switch
        v-model:value="switchValue"
        active-text="年付费"
        close-text="月付费"
      />
      <br />
      <p>禁用滑块</p>
      <Switch disabled />
      <p>自定义颜色</p>
      <Switch closeColor="rgb(19, 206, 102)" activeColor="rgb(255, 73, 73)" />
    </div>

    <div>
      <h3>输入框</h3>
      <Input type="text" v-model:value="inputValue" />

      <p>占位符</p>
      <Input type="text" placeholder="这是一段占位符" />
      <p>样式</p>
      <Input type="text" placeholder="PRIMARY" />
      <Input type="text" theme="secondary" placeholder="SECONDARY" />
      <Input type="text" theme="danger" placeholder="DANGER" />

      <p>类型</p>
      <Input type="textarea" placeholder="TEXTAREA" /> <br />
      <Input type="password" placeholder="PASSWORD" />
      <Input type="number" placeholder="NUMBER" />

      <p>禁用</p>
      <Input type="textarea" placeholder="禁用" disabled />
      <br />
      <Input type="text" placeholder="只读" readonly />

      <p>长度限制</p>
      <Input type="text" :maxlength="10" placeholder="最大限制" />
    </div>
    <div>
      <h3>信息框</h3>
      <Button theme="primary">INFO</Button>
      <Button theme="primary">SUCCESS</Button>
      <Button theme="primary">WARNING</Button>
      <Button theme="primary">DANGER</Button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Switch from "../lib/Switch.vue";
import Input from "../lib/Input.vue";
import Message from "../lib/Message.vue";

export default {
  components: {
    Button,
    Switch,
    Input,
    Message,
  },
  Messagetup(props, context) {
    const switchValue = ref(false);
    const inputValue = ref(null);

    return {
      switchValue,
      inputValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-bottom: 50vh;
  > div > button {
    margin-right: 0.3rem;
  }
  > div > span {
    margin-right: 0.3rem;
  }
  > div > input {
    margin-right: 0.3rem;
  }
}
</style>
