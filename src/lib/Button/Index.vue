<template>
  <button
    class="pure-btn"
    :class="[
      { [`pure-btn-theme-${theme}`]: theme },
      { [`pure-btn-theme-${theme}-disabled`]: disabled || loading },
      { 'pure-btn-theme-loading': loading },
      { [`pure-btn-size-${size}`]: size },
    ]"
    :disabled="disabled || loading"
  >
    <div v-if="loading" class="pure-btn-loading"></div>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    theme: { type: String, default: "default" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    size: { type: String, default: "normal" },
  },
  setup(props, context) {},
};
</script>

<style lang="scss">
@import "../custom.scss";
.pure-btn {
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 0;
  border: 1px solid transparent;
  .pure-btn-loading {
    display: inline-block;
    margin: -1px -2px -3px -2px;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: transparent;
    animation: pure-btn-loading 1s infinite;
    margin-right: 0.5rem;
    border: 2px solid $color-white;
  }
}
.pure-btn-theme {
  &-default {
    background: $color-white;
    border: 1px solid $border-lighter;
    &:hover {
      border: 1px solid $border-light;
    }
    &:active {
      border: 1px solid $border-base;
    }
    &-disabled {
      cursor: not-allowed;
      border: 1px solid $border-lighter;
      &:hover {
        border: 1px solid $border-lighter;
      }
      &:active {
        border: 1px solid $border-lighter;
      }
    }
    .pure-btn-loading {
      border: 2px solid $text-regular;
      border-left-color: $color-white;
    }
  }
  &-primary {
    background: $primary;
    color: $color-white;
    &:hover {
      background: $primary-hover;
    }
    &:active {
      background: $primary-active;
    }
    &-disabled {
      cursor: not-allowed;
      background: $primary-light;
      &:hover {
        background: $primary-light;
      }
      &:active {
        background: $primary-light;
      }
    }
    .pure-btn-loading {
      border-left-color: $primary-light;
    }
  }
  &-secondary {
    background: $secondary;
    color: $color-white;
    &:hover {
      background: $secondary-hover;
    }
    &:active {
      background: $secondary-active;
    }
    &-disabled {
      cursor: not-allowed;
      background: $secondary-light;
      &:hover {
        background: $secondary-light;
      }
      &:active {
        background: $secondary-light;
      }
    }
    .pure-btn-loading {
      border-left-color: $secondary-light;
    }
  }
  &-danger {
    background: $danger;
    color: $color-white;
    &:hover {
      background: $danger-hover;
    }
    &:active {
      background: $danger-active;
    }
    &-disabled {
      cursor: not-allowed;
      background: $danger-light;
      &:hover {
        background: $danger-light;
      }
      &:active {
        background: $danger-light;
      }
    }
    .pure-btn-loading {
      border-left-color: $danger-light;
    }
  }
  &-text {
    line-height: 1rem;
    padding: 0 !important;
    background: $color-transparent;
    color: $text-primary;
    padding-bottom: 3px !important;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 100%;
      border-bottom: 1px solid #222;
      transition: right 0.3s ease-out;
    }
    &:hover::before {
      right: 0;
    }
    &-disabled {
      cursor: not-allowed;
      &::before {
        border-bottom: transparent;
      }
    }
  }
  &-link {
    padding: 0 !important;
    background: $color-transparent;
    color: $primary;
    &:hover {
      border-bottom: 1px solid $primary;
    }
    &-disabled {
      cursor: not-allowed;
      &:hover {
        border-bottom: transparent;
      }
    }
  }
}
.pure-btn-size {
  &-large {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  &-normal {
    padding: 0.7rem 1.8rem;
  }
  &-small {
    padding: 0.35rem 0.9rem;
    font-size: 0.5rem;
  }
}
@keyframes pure-btn-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
