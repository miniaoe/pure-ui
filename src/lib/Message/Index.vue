<template>
  <div
    :id="id"
    class="pure-message"
    :class="{ [`pure-message-${type}`]: type }"
    :style="custonStyle"
  >
    <div class="info">
      <svg viewBox="0 0 512 512" class="icon">
        <path fill="currentColor" :d="icon[type]"></path>
      </svg>
      <span>{{ message }}</span>
    </div>
    <svg
      v-if="showClose"
      viewBox="0 0 512 512"
      class="icon close"
      @click="onClose(id)"
    >
      <path fill="currentColor" :d="icon.close"></path>
    </svg>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  props: {
    type: { default: "info" },
    message: String,
    id: String,
    offset: { type: Number, default: 20 },
    onClose: Function,
    showClose: { type: Boolean },
  },
  setup(props, ctx) {
    const icon = ref({
      info: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
      success:
        "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
      warning:
        "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
      danger:
        "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",
      close:
        "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    });

    const custonStyle = computed(() => {
      return {
        top: `${props.offset}px`,
      };
    });

    return {
      icon,
      custonStyle,
    };
  },
};
</script>

<style lang="scss">
@import "../custom.scss";
.pure-message {
  min-width: 350px;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  overflow: hidden;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 1s;
  > .info {
    display: flex;
    > :first-child {
      margin-right: 8px;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }

  > .close {
    cursor: pointer;
  }

  &-info {
    color: $info;
    border: 1px solid $info-light;
    background: $info-lighter;
  }
  &-success {
    color: $success;
    border: 1px solid $success-light;
    background: $success-lighter;
  }
  &-warning {
    color: $warning;
    border: 1px solid $warning-light;
    background: $warning-lighter;
  }
  &-danger {
    color: $danger-active;
    border: 1px solid $danger-light;
    background: $danger-lighter;
  }
}
</style>
