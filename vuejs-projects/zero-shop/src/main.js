import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes/routes.js'

//in order to use axios
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);


// use router
Vue.use(VueRouter);
const router = new VueRouter ({
  routes: Routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});



