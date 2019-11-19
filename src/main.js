import Vue from "vue";
import App from "./App.vue";
import store from "./Store";
import VueRouter from "vue-router";
import PageNotFound from "./components/PageNotFound";
//Dependancy
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery.easing/jquery.easing.min.js";
import Home from "./components/Home.vue";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/404', component: PageNotFound },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
