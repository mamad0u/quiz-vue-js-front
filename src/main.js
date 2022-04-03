import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueConfetti from 'vue-confetti'


createApp(App)
    .component('my-header', MyHeader)
    .use(store)
    .use(VueAxios, axios)
    .use(VueConfetti)
    .use(router)
    .mount('#app')