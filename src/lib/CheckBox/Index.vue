<template>
  <label class="pure-checkbox" @click.stop="onClick">
    <input class="isCheck" type="checkbox" hidden @click.stop />
    <span class="checkboxs">
      <svg class="check-icon" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
          class=""
        ></path>
      </svg>
    </span>
    <span class="text">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      default: [],
    },
    label: { type: String, Number, Boolean, default: "" },
  },
  setup(props, ctx) {
    const onClick = () => {
      const { label } = props;
      const array = props.modelValue;
      const index = array.findIndex((val) => label === val);
      if (index === -1) {
        array.push(label);
      } else {
        array.splice(index, 1);
      }
      ctx.emit("update:modelValue", array);
    };

    return {
      onClick,
    };
  },
};
</script>

<style lang="scss">
@import "../custom.scss";
.pure-checkbox {
  cursor: pointer;
  > .checkboxs {
    display: inline-block;
    width: 12px;
    height: 12px;
    vertical-align: -3px;
    border: 2px solid $border-lighter;
    position: relative;
    transition: all 0.3s;
    > .check-icon {
      width: 8px;
      height: 8px;
      position: absolute;
      top: 2px;
      left: 2px;
      display: none;
      transition: all 0.3s;
      color: $color-white;
    }
  }
  > .isCheck:checked + .checkboxs {
    background: $primary;
    border: 2px solid $primary;
    > .check-icon {
      display: block;
    }
  }
  > .text {
    margin-left: 0.3rem;
  }
  &-disabled {
    cursor: not-allowed;
    > .isCheck:checked + .checkboxs {
    }
  }
}
</style>
