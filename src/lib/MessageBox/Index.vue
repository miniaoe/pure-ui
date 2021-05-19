<template>
  <div class="pure-message-box" @click.self="onClickShade" @mousewheel.prevent>
    <div class="message-box">
      <!-- <div v-if="!title && showClose" class="title"> -->
      <div class="title">
        <span>{{ title }}</span>
        <!-- <span v-if="showClose" @click="onClickShade">x</span> -->
        <svg viewBox="0 0 352 512" class="close-btn" @click.stop="onClickClose">
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            class=""
          ></path>
        </svg>
      </div>
      <div class="content">
        <span v-if="!prompt">{{ content }}</span>
        <Input v-else v-model:value="inputValue" />
      </div>
      <div class="button">
        <Button v-show="showCancel" size="small" @click="onClickCancel">
          {{ cancelText }}
        </Button>
        <Button theme="primary" size="small" @click="onClickOk">
          {{ okText }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../Button/Index.vue";
import Input from "../Input/Index.vue";
export default {
  props: {
    title: String,
    content: String,
    showClose: { type: Boolean },
    showCancel: { type: Boolean, default: false },
    cancelText: { type: String, default: "取消" },
    okText: { type: String, default: "确认" },
    clickShadeClose: { type: Boolean, default: false },
    onClose: Function,
    onOk: Function,
    onCancel: Function,
    callback: Function,
    prompt: { type: Boolean, default: false },
  },
  components: {
    Button,
    Input,
  },
  setup(props, ctx) {
    const inputValue = ref(null);

    const onClickShade = () => {
      if (!props.clickShadeClose) return;
      props.onClose();
      onCallback("shade");
    };

    const onClickClose = () => {
      props.onClose();
      onCallback("close");
    };

    const onClickCancel = () => {
      props.onCancel();
      props.onClose();
      onCallback("cancel");
    };

    const onClickOk = () => {
      props.onOk();
      props.onClose();
      onCallback("ok");
    };

    const onCallback = (action) => {
      if (props.callback) props.callback(action);
    };

    return {
      inputValue,
      onClickShade,
      onClickClose,
      onClickCancel,
      onClickOk,
    };
  },
};
</script>

<style lang="scss">
@import "../custom.scss";
.pure-message-box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  > .message-box {
    background: $color-white;
    padding: 1rem;
    border: 1px solid $info-light;
    box-shadow: $shadow;
    border-radius: 2px;
    width: 300px;
    > .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.7rem;
      padding-bottom: 0.3rem;
      border-bottom: 1px solid $border-extra-light;
      > .close-btn {
        min-width: 1rem;
        height: 1rem;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          color: $primary;
        }
      }
    }
    .content {
      margin-bottom: 1rem;
    }
    > .button {
      text-align: right;
      > button {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
