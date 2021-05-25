<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <a href="./"> Pure UI </a>
      </div>
      <div class="nav">
        <a href="//github.com/miniaoe/pure-ui" target="_blank">Github</a>
      </div>
      <span class="mob-menu" @click="mobMenu = !mobMenu">
        <img src="../assets/bars.svg" />
      </span>
    </div>
    <div class="content">
      <div class="shade" v-if="mobMenu" @click="mobMenu = !mobMenu"></div>
      <div class="menu" :class="{ 'menu-active': mobMenu }">
        <div class="item">
          <h3>文档</h3>
          <ul>
            <router-link to="/doc/intro" active-class="active">
              <li>介绍</li>
            </router-link>
          </ul>
        </div>
        <div class="item">
          <h3>组件</h3>
          <ul>
            <router-link to="/doc/button" active-class="active">
              <li>Button 按钮</li>
            </router-link>
            <router-link to="/doc/input" active-class="active">
              <li>Input 输入框</li>
            </router-link>
            <router-link to="/doc/radio" active-class="active">
              <li>Radio 单选框</li>
            </router-link>
            <router-link to="/doc/checkbox" active-class="active">
              <li>CheckBox 多选框</li>
            </router-link>
            <router-link to="/doc/message" active-class="active">
              <li>Message 消息提示</li>
            </router-link>
            <router-link to="/doc/message-box" active-class="active">
              <li>MessagBox 弹窗</li>
            </router-link>
            <router-link to="/doc/switch" active-class="active">
              <li>Switch 开关</li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="docs">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
export default {
  setup(props, ctx) {
    const mobMenu = ref(false);

    onBeforeRouteUpdate((to) => {
      mobMenu.value = false;
    });

    return { mobMenu };
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  min-height: 80px;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 30;
  .logo {
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  .mob-menu {
    display: none;
  }
}
.content {
  flex-grow: 1;
  display: flex;
  .shade {
    display: none;
    z-index: 10;
  }
  .menu {
    width: 250px;
    height: auto;
    padding: 0.5rem;
    padding-top: 1rem;
    box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
    border: 1px solid #e8e8e8;
    z-index: 20;
    > .item {
      margin-bottom: 1rem;
      h3 {
        font-weight: 600;
      }
      li {
        padding: 1rem 0;
        cursor: pointer;
        transition: all 0.3s;
      }
      li:hover {
        color: #1e87f0;
      }
    }
  }
  .docs {
    flex: 1;
    padding: 1rem 2rem;
    max-height: calc(100vh - 80px);
    overflow: auto;
  }
}
.active {
  color: #1e87f0;
}

::v-deep(.item) {
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
}
::v-deep(.markdown-body table) {
  display: table;
  font-size: 14px;
}

@media (max-width: 768px) {
  .header {
    padding: 0 0.5rem;
    background: #fff;
    .nav {
      display: none;
    }
    .mob-menu {
      display: inline-block;
      width: 1.5rem;
      margin-right: 1rem;
      > img {
        vertical-align: bottom;
      }
    }
  }

  .content {
    position: relative;
    .menu {
      position: absolute;
      background: #fff;
      min-height: calc(100vh - 80px);
      left: -100%;
      transition: all 0.3s;
      border: none;
      &-active {
        left: 0;
      }
    }
    .shade {
      display: block;
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: transparent;
      left: 0;
      top: 0;
    }
    .docs {
      padding: 0.5rem;
      max-width: 100%;
    }
  }
}
</style>
