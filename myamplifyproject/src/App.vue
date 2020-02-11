<template>
<v-app>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

  </v-app-bar>
    <!-- 認証済みの時はメインの画面を表示 -->
    <div class="main" v-if="signedIn">
      <div id="nav">
        <div class="amplify-sign-out">
          <!-- Amplify UIのSign Out用コンポーネントを追加 -->
          <amplify-sign-out />
          <!-- ログイン済みユーザのusernameを表示 -->
          ようこそ、{{username}} さん
        </div>
        <li>
          <router-link to="/ai">AIアプリ</router-link>
        </li>
        <li>
          <router-link to="/chat">チャットアプリ</router-link>
        </li>
      </div>
      <router-view />
    </div>
    <!-- 認証していない時はログイン画面を表示 -->
    <div v-else>
      <amplify-authenticator />
    </div>
</v-app>
</template>

<script>
import {
  Auth
} from 'aws-amplify'
import {
  AmplifyEventBus
} from 'aws-amplify-vue'

window.LOG_LEVEL = 'VERBOSE';

export default {
  name: 'app',
  data() {
    return {
      signedIn: false,
      username: ''
    }
  },
  async beforeCreate() {
    // Auth.currentAuthenticatedUser()でユーザ情報を取得する。
    // 取得できなければ認証ステータスをfalseに設定する
    try {
      let cognitoUser = await Auth.currentAuthenticatedUser()
      this.signedIn = true
      this.username = cognitoUser.username
    } catch (err) {
      this.signedIn = false
    }
    // 認証ステータスが変わった時に呼び出されるイベントを登録
    AmplifyEventBus.$on('authState', async info => {
      if (info === 'signedIn') {
        let cognitoUser = await Auth.currentAuthenticatedUser()
        this.signedIn = true
        this.username = cognitoUser.username
      } else {
        this.signedIn = false
      }
    });
  }
};
</script>

<style src="./assets/style.css" />
