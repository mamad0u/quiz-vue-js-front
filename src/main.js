import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader.vue'


createApp(App)
.component('my-header', MyHeader)
.use(router)
.mount('#app')
