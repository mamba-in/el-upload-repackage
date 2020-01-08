import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Upload from './components/el-upload-repackage'

export default Upload
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('el-upload-repackage', Upload)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
