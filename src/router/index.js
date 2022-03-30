import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizzView.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: HomeView
}, {
  path: '/quiz/:slug',
  name: 'quiz',
  component: QuizView
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router