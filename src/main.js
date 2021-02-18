import Vue from 'vue'
import App from './App.vue'

import Notifications from "vt-notifications";

Vue.use(Notifications);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
