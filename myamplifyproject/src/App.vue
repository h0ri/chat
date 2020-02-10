<template>
  <div id="app">
    <div id="nav">
      <li><router-link to="/ai">AIアプリ</router-link></li>
      <li><router-link to="/chat">チャットアプリ</router-link></li>
      <router-view />
    </div>
  </div>
</template>

<style src="./assets/style.css" />
