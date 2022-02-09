import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'
import dwjRequest from './network'

import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).mount('#app')

console.log(dwjRequest)
