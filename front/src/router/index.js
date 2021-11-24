import Vue from "vue";
import VueRouter from "vue-router";
import MainView from '@/views/MainView.vue';
import IntroduceView from '@/views/IntroduceView.vue';

Vue.use(VueRouter);

const routes = [
  //MainPageView
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  //IntroduceView
  {
    path: '/introduce',
    name: 'IntroduceView',
    component: IntroduceView
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
