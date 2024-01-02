<template>
  <div>
    <div class="homepage-container">
      <!-- 头像 -->
      <div class="avatar"></div>
      <!-- 黄线 -->
      <strong class="highlight">欢迎来到何汉叁的主页👦</strong>
      <div class="introduce">一位又菜又爱学的脆皮大学生&&后端假程序猿，业余运维，业余的业余是云计算</div>
      <!-- 链接 -->
      <div class="tooltip-container">
        <span class="tooltip">Daily.Log</span>
        <span class="text"><a href="https://my.gintama.love">博客 👆</a></span>
        <span>Welcome 👋</span>
      </div>
      <div class="tooltip-container">
        <span class="tooltip">Frequent.Use</span>
        <span class="text"><a href="https://github.com/HanSanCoder">Github 🙄</a></span>
        <span>He 👋</span>
      </div>
      <div class="tooltip-container">
        <span class="tooltip">My.favorite</span>
        <span class="text"><a href="https://juejin.cn/user/2483142306569175/posts">掘金 ✍️</a></span>
        <span>の 👋</span>
      </div>
      <div class="tooltip-container">
        <span class="tooltip">Digital.Garden</span>
        <span class="text"><a href="https://www.yuque.com/hehansan">语雀 🐦</a></span>
        <span>Personal 👋</span>
      </div>
      <div class="tooltip-container">
        <span class="tooltip">Private.email</span>
        <span class="text"><a href="mailto:hehansan@gintama.love">邮箱 📮</a></span>
        <span>Space! 👋</span>
      </div>
    </div>
    <footer>
      ©2023 Hansan's Homepage.
      <a href="https://beian.miit.gov.cn/">{{ $myGlobalVariable }}</a> Powered by
      <a href="https://github.com/HanSanCoder/hansan_homepage">hansan_homepage</a>
      project. Background image by
      <a href="https://www.loliapi.com/">Loli API.</a>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
