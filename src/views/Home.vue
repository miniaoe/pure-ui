<template>
  <div class="main">
    <div class="content">
      <img class="legend" src="../assets/done.svg" />
      <div class="about">
        <h1>Pure UI</h1>
        <h3>
          <strong>Pure UI</strong> 是一款轻量级小型的 UI 框架，基于
          <strong>Vue3</strong>，未采用任何第三方库纯手工打造。
        </h3>
        <p class="tips">
          本项目目的为学习Vue3，<strong>因此未发布至 npm</strong>
        </p>
        <div class="buttons">
          <router-link to="/doc">
            <Button theme="primary">🛩️ 开始使用吧</Button>
          </router-link>
          <a href="//github.com/miniaoe/pure-ui" target="_blank">
            <Button theme="secondary">✨ Github</Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../lib/Button/Index.vue";
export default {
  components: { Button },
  setup() {},
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.content {
  height: calc(100% - 25vh);
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .legend {
    width: 45%;
    margin-right: 3rem;
    animation: float 5s ease-in-out infinite;
  }
  .about {
    margin-top: 13%;
    h1 {
      margin: 0;
      font-size: 3rem;
      cursor: pointer;
    }
    h3 {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8rem;
      margin-top: 2rem;
      > strong {
        font-weight: normal;
        padding: 0.2rem 0.5rem;
        background: #000;
        border-radius: 3px;
        color: #fff;
      }
    }
    .tips {
      padding: 0.7rem;
      margin: 0;
      margin-top: 2.5rem;
      border-radius: 3px;
      background: #fdf6ec;
      color: #e6a23c;
    }
    .buttons {
      margin-top: 1rem;
    }
  }
}

@media (max-width: 768px) {
  .main {
    height: auto;
  }
  .content {
    flex-direction: column;
    padding: 1rem;
    .legend {
      width: 70%;
      margin-right: 0;
    }
    .about {
      max-width: 468px;
      text-align: center;
      margin-bottom: 3rem;
    }
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
