<template>
  <textarea
    v-if="type === 'textarea'"
    :rows="rows"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :maxlength="maxlength"
    :minlength="minlength"
    :value="modelValue"
    class="pure-input pure-input-textarea"
    :class="[
      { [`pure-input-${theme}`]: theme },
      { [`pure-input-disabled`]: disabled },
    ]"
    @input="$emit('input', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
  ></textarea>
  <input
    v-else
    :type="type"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :maxlength="maxlength"
    :minlength="minlength"
    :value="modelValue"
    class="pure-input"
    :class="[
      { [`pure-input-${theme}`]: theme },
      { [`pure-input-${size}`]: size },
      { [`pure-input-disabled`]: disabled },
    ]"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  />
</template>

<script>
export default {
  props: {
    modelValue: { type: String },
    type: { type: String, default: "text" },
    theme: { type: String, default: "primary" },
    size: { type: String, default: "normal" },
    placeholder: { type: String },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    rows: { type: Number, default: 4 },
    maxlength: { type: Number },
    minlength: { type: Number },
  },
  setup(props, ctx) {
    const handleInput = (event) => {
      const { value } = event.target;
      ctx.emit("update:modelValue", value);
      ctx.emit("input", event);
    };

    const handleChange = (event) => {
      ctx.emit("change", event);
    };

    const handleBlur = (event) => {
      ctx.emit("blur", event);
    };

    const handleFocus = (event) => {
      ctx.emit("focus", event);
    };

    return {
      handleInput,
      handleChange,
      handleBlur,
      handleFocus,
    };
  },
};
</script>

<style lang="scss">
@import "../custom.scss";
.pure-input {
  border-radius: 0;
  border: 1px solid $border-lighter;
  transition: all 0.3s;
  &-textarea {
    padding: 5px 6px;
    outline: none;
    &:focus {
      border: 1px solid $primary;
    }
  }
  &-primary {
    &:focus {
      border: 1px solid $primary;
    }
  }
  &-secondary {
    &:focus {
      border: 1px solid $secondary;
    }
  }
  &-danger {
    &:focus {
      border: 1px solid $danger;
    }
  }
  &-disabled {
    cursor: not-allowed;
    background: text-secondary;
  }
  &-normal {
    font-size: 15px !important;
    line-height: 30px;
    height: 40px;
    padding: 0 10px;
  }
  &-large {
    font-size: 18px !important;
    line-height: 40px;
    height: 50px;
    padding: 0 15px;
  }
  &-small {
    font-size: 12px !important;
    line-height: 20px;
    height: 30px;
    padding: 0 7px;
  }
}
</style>
