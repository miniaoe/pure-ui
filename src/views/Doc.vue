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
      <Button theme="primary" @click="onMessage('info')">INFO</Button>
      <Button theme="primary" @click="onMessage('success')">SUCCESS</Button>
      <h3>信息框 带关闭按钮</h3>
      <Button theme="primary" @click="onMessageClose('warning')">
        WARNING
      </Button>
      <Button theme="primary" @click="onMessageClose('danger')">DANGER</Button>
    </div>
    <div>
      <h3>弹窗</h3>
      <Button theme="primary" @click="onMessageBox('alert')">消息提示</Button>
      <Button theme="primary" @click="onMessageBox('confirm')">确认消息</Button>
      <Button theme="primary" @click="onMessageBox('prompt')">提交内容</Button>
    </div>
    <div>
      <h3>单选框</h3>
      <Radio v-model="radioValue" :label="1" disabled>选项</Radio>
      <Radio v-model="radioValue" :label="2">选项</Radio>
      <Radio v-model="radioValue" :label="3">选项</Radio>
    </div>
    <div>
      <h3>复选框</h3>
      <CheckBox v-model="checkboxValue" label="北京">北京</CheckBox>
      <CheckBox v-model="checkboxValue" label="上海">上海</CheckBox>
      <CheckBox v-model="checkboxValue" label="广州">广州</CheckBox>
      <CheckBox v-model="checkboxValue" label="曹县">曹县</CheckBox>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../lib/Button/Index.vue";
import Switch from "../lib/Switch/Index.vue";
import Input from "../lib/Input/Index.vue";
import Radio from "../lib/Radio/Index.vue";
import CheckBox from "../lib/CheckBox/Index.vue";

import Message from "../lib/Message/Index.js";
import MessageBox from "../lib/MessageBox/Index.js";

export default {
  components: {
    Button,
    Switch,
    Input,
    Radio,
    CheckBox,
  },
  setup(props, context) {
    const switchValue = ref(false);
    const inputValue = ref(null);
    const radioValue = ref(1);
    const checkboxValue = ref([]);

    const onMessage = (type) => {
      Message[type]("123");
    };
    const onMessageClose = (type) => {
      Message[type]({ message: "111", duration: 5000, showClose: true });
    };

    const onMessageBox = (type) => {
      switch (type) {
        case "confirm":
          MessageBox[type](
            "确认消息",
            "中国不能失去曹县，就像西方不能失去耶路撒冷。"
          )
            .then(() => {
              console.log("点击确定");
            })
            .catch(() => {
              console.log("取消或者失败");
            });
          break;

        case "prompt":
          MessageBox[type](
            "提交信息",
            "中国不能失去曹县，就像西方不能失去耶路撒冷。",
            {
              placeholder: "除了北京上海广州还有哪里？",
            }
          )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          break;

        default:
          MessageBox[type](
            "消息提示",
            "中国不能失去曹县，就像西方不能失去耶路撒冷。",
            {
              callback: (action) => {
                console.log("callback:" + action);
              },
            }
          );
          break;
      }
    };

    return {
      switchValue,
      inputValue,
      radioValue,
      checkboxValue,
      onMessage,
      onMessageClose,
      onMessageBox,
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
