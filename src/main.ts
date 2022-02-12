import { createApp } from 'vue'
import 'normalize.css'

import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'

import './assets/css/index.less'
import 'element-plus/dist/index.css'

setupStore()
createApp(App).use(router).use(store).mount('#app')

