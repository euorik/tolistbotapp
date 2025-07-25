// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '../views/TaskView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {    
    path: '/',
    name: 'Tasks',
    component: TasksView    
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
