<template>
  <div>
    <div class="homepage-container">
      <div class="main_panel">
        <!-- 头像 -->
        <div class="avatar-container">
          <div class="avatar"></div>
        </div>
        <!-- 黄线 -->
        <div class="description_container">
          <h1 class="highlight">欢迎来到何汉叁的主页😄</h1>
          <p>一位泡论坛乐不思蜀的佬友&&后端假程序猿，喜欢做点自己的小玩具</p>
        </div>
        <div class="social-media-container">
          <!--QQ-->
          <div class="tooltip-container">
            <span class="tooltip">Call.me</span>
            <a href="tencent://message/?uin=3313592503" class="link" target="_blank">
              <span class="text">QQ</span>
              <span>Hey 👋</span>
            </a>
          </div>
          <!-- 博客 -->
          <div class="tooltip-container">
            <span class="tooltip">Daily.Log</span>
            <a href="https://my.gintama.love" class="link" target="_blank">
              <span class="text">博客</span>
              <span>Welcome 👋</span>
            </a>
          </div>
          <!--github-->
          <div class="tooltip-container">
            <span class="tooltip">Frequent.Use</span>
            <a href="https://github.com/HanSanCoder" class="link" target="_blank">
              <span class="text">Github</span>
              <span>He 👋</span>
            </a>
          </div>
          <!--简历-->
          <div class="tooltip-container">
            <span class="tooltip">My.cv</span>
            <a href="https://bio.gintama.love" class="link" target="_blank">
              <span class="text">简历</span>
              <span>の 👋</span>
            </a>
          </div>
          <!--语雀-->
          <div class="tooltip-container">
            <span class="tooltip">Digital.Garden</span>
            <a href="https://www.yuque.com/hehansan" class="link" target="_blank">
              <span class="text">语雀</span>
              <span>Personal 👋</span>
            </a>
          </div>
          <!--邮箱-->
          <div class="tooltip-container">
            <span class="tooltip">Private.email</span>
            <a href="mailto:hehansan@gintama.love" class="link" target="_blank">
              <span class="text">邮箱</span>
              <span>Space! 👋</span>
            </a>
          </div>
        </div>
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

<style></style>