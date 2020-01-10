import Vue from 'vue'
import { Button, Upload, Message, MessageBox, Table, TableColumn } from 'element-ui'

Vue.use(Button)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
