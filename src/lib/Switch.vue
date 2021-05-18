<template>
  <div class="pure-switch">
    <span
      v-if="activeText"
      class="active-text"
      :style="{ color: [status ? '' : closeColor] }"
    >
      {{ activeText }}
    </span>
    <span
      class="switch"
      :style="[
        { background: [status ? closeColor : activeColor] },
        { width: width + 'px' },
      ]"
      :class="[
        { 'switch-check': status && !disabled },
        { 'switch-disabled': disabled },
      ]"
      :disabled="disabled"
      @click="onClick"
    ></span>
    <span
      v-if="closeText"
      class="close-text"
      :style="{ color: [status ? closeColor : ''] }"
    >
      {{ closeText }}
    </span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    value: { type: Boolean },
    activeColor: { type: String, default: "#c0ccda" },
    closeColor: { type: String, default: "#1e87f0" },
    width: { type: Number, default: 45, min: 40 },
    disabled: { type: Boolean },
    activeText: { type: String },
    closeText: { type: String },
  },
  setup(props, context) {
    const status = ref(props.value);
    const onClick = () => {
      status.value = !status.value;
      context.emit("update:value", status.value);
    };
    return { status, onClick };
  },
};
</script>

<style lang="scss">
@import "./custom.scss";
.pure-switch {
  display: inline-flex;
  align-items: center;
  > .switch {
    display: inline-block;
    height: calc(1rem + 6px);
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    &::after {
      content: "";
      width: 1rem;
      height: 1rem;
      background: $color-white;
      position: absolute;
      top: 3px;
      left: 3px;
      transition: all 0.3s;
      box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.3);
    }
    &-check {
      &::after {
        left: calc(100% - 1rem - 3px);
      }
    }
    &-disabled {
      cursor: not-allowed;
      background: $text-placeholder-light !important;
      &::after {
        box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.3);
        background: $color-white;
      }
    }
  }
  > .active-text {
    display: inline-block;
    margin-right: 0.5rem;
  }
  > .close-text {
    display: inline-block;
    margin-left: 0.5rem;
  }
}
</style>
