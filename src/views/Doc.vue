<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <a href="./"> Pure UI </a>
      </div>
      <div class="nav">
        <a href="//github.com" target="_blank">Github</a>
      </div>
    </div>
    <div class="content">
      <div class="menu">
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
  .logo {
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
}
.content {
  flex-grow: 1;
  display: flex;
  .menu {
    width: 250px;
    height: auto;
    padding: 0.5rem;
    padding-top: 1rem;
    box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
    border: 1px solid #e8e8e8;
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
  }
}
.active {
  color: #1e87f0;
}
::v-deep {
  .item {
    margin-right: 0.3rem;
  }
  .markdown-body table {
    display: table;
    font-size: 14px;
  }
}
</style>
