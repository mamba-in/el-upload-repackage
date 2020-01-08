import Vue from 'vue'
import { Button, Upload, Message, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Upload)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
