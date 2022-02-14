import { createApp } from 'vue'
import 'normalize.css'

import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'
import globalRegister from './global'

import './assets/css/index.less'
import 'element-plus/dist/index.css'

const app = createApp(App)

setupStore()

// use(里面可以传函数也可以传对象，但是对象里面必须有 install 方法)
app.use(router)
app.use(store)
app.use(globalRegister)
app.mount('#app')
