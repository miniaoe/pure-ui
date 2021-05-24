<template>
  <label
    role="radio"
    tabindex="0"
    class="pure-radio"
    :class="{ 'pure-radio-disabled': disabled }"
    :aria-disabled="disabled"
    @click="onClick"
  >
    <input type="radio" class="isCheck" hidden :checked="isCheck" @click.stop />
    <i class="radios"></i>
    <span class="text"><slot /></span>
  </label>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: "",
    },
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    disabled: Boolean,
  },
  setup(props, ctx) {
    const isCheck = computed(() => {
      return props.modelValue === props.label ? true : false;
    });

    const onClick = () => {
      if (props.disabled) return;
      ctx.emit("update:modelValue", props.label);
    };

    return { isCheck, onClick };
  },
};
</script>

<style lang="scss">
@import "../custom.scss";
.pure-radio {
  cursor: pointer;
  > .radios {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: -3px;
    border: 2px solid $border-lighter;
    border-radius: 50%;
    position: relative;
    transition: all 0.3s;
    &::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $border-lighter;
      transition: all 0.3s;
    }
  }
  > .isCheck:checked + .radios {
    border: 2px solid $primary;
    background: $primary;
    &::after {
      background: $color-white;
    }
  }
  > .text {
    margin-left: 5px;
  }
  &-disabled {
    cursor: not-allowed;
    color: $text-secondary;
    .radios::after {
      background: $border-lighter;
    }
    > .isCheck:checked + .radios {
      background: $color-white;
      border: 2px solid $border-lighter;
      &::after {
        background: $border-lighter;
      }
    }
  }
}
</style>
