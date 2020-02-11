import Vue from 'vue';
import Router from 'vue-router';
import calendar from '../calendar.vue';
import Chat from '../Chat.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
});
