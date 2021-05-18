<template>
  <Teleport to="body">
    <div class="pure-message pure-message-info">
      <span>图</span>
      <span>这是提示内容</span>
      <span>×</span>
    </div>
  </Teleport>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {},
};
</script>

<style lang="scss">
@import "./custom.scss";
.pure-message {
  display: inline-flex;
  padding: 0.8rem 1.5rem;
  border-radius: 0;
  align-items: center;
  min-width: 300px;
  margin: 0 auto;
  > span {
    display: inline-block;
  }
  > :first-child {
    margin-right: 0.5rem;
  }
  > :last-child {
    margin-left: auto;
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
