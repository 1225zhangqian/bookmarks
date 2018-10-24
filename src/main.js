import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './plugins/element.js'
import directives from './directives/directive.js'
import tip from './components/tip.vue'
// 全局注册组件
Vue.component('tip', tip)
// 全局注册指令
Vue.use(directives)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
