<template>
  <div class="pure-message-box" @click.self="clickShade" @mousewheel.prevent>
    <div class="message-box">
      <div class="title">
        <span>{{ title }}</span>
        <svg viewBox="0 0 352 512" class="close-btn" @click.stop="clickCancel">
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            class=""
          ></path>
        </svg>
      </div>
      <div class="content">
        <Input
          v-if="boxType === 'prompt'"
          v-model="inputValue"
          class="input"
          :placeholder="placeholder"
        />
        <span v-else>{{ content }}</span>
      </div>
      <div class="button">
        <Button v-show="showCancel" size="small" @click="clickCancel">
          {{ cancelText }}
        </Button>
        <Button theme="primary" size="small" @click="clickDone">
          {{ doneText }}
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
    boxType: String,
    title: String,
    content: String,
    cancelText: { type: String, default: "取消" },
    doneText: { type: String, default: "确认" },
    showCancel: { type: Boolean, default: false },
    showClose: { type: Boolean, default: true },
    clickShadeClose: { type: Boolean, default: false },
    placeholder: String,
    onClose: Function,
    onCancel: Function,
    onDone: Function,
    callback: Function,
  },
  components: {
    Button,
    Input,
  },
  setup(props, ctx) {
    const inputValue = ref(null);

    const { boxType, clickShadeClose, callback, onClose, onCancel, onDone } =
      props;

    const clickShade = () => {
      if (clickShadeClose) clickCancel();
    };

    const clickCancel = () => {
      if (boxType === "alert") {
        if (callback) callback("cancel");
      }
      if (boxType === "confirm" || boxType === "prompt") {
        onCancel(false);
      }
      onClose();
    };

    const clickDone = () => {
      if (boxType === "alert") {
        if (callback) callback("done");
      }
      if (boxType === "confirm" || boxType === "prompt") {
        onDone(inputValue.value);
      }
      onClose();
    };

    return {
      clickShade,
      clickCancel,
      clickDone,
      inputValue,
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
    padding: 16px;
    border: 1px solid $info-light;
    box-shadow: $shadow;
    border-radius: 2px;
    width: 300px;
    > .content {
      > .input {
        width: 100%;
      }
    }
    > .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 11px;
      padding-bottom: 5px;
      border-bottom: 1px solid $border-extra-light;
      > .close-btn {
        min-width: 16px;
        height: 16px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          color: $primary;
        }
      }
    }
    .content {
      margin-bottom: 16px;
    }
    > .button {
      text-align: right;
      > button {
        margin-left: 8px;
      }
    }
  }
}
</style>
