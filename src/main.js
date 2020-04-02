// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/style/reset.css"
import "./assets/style/border.css"
import "./assets/js/rem.js"
import fastClick from "fastclick"
import "./assets/style/iconfont.css";

Vue.config.productionTip = false
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
