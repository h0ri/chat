<template>
  <div id="app">
      <amplify-authenticator />
      <div id="nav">
        <li><router-link to="/ai">AIアプリ</router-link></li>
        <li><router-link to="/chat">チャットアプリ</router-link></li>
    </div>
    <router-view/>
  </div>
</template>

<style src="./assets/style.css" />
