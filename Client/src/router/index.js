import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import MembersView from '../views/MembersView.vue'
import MemberProfile from '../views/MemberProfile.vue'
import UserProfile from '../views/UserProfile.vue'
import OshiPage from '../views/OshiPage.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView
    },
    {
      path: '/members/:nickName',
      name: 'memberProfile',
      component: MemberProfile
    },
    {
      path: '/users/:username',
      name: 'userProfile',
      component: UserProfile
    },
    {
      path: '/oshi',
      name: 'oshiPage',
      component: OshiPage
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'notFound',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('access_token')
  if (to.name == 'Login' && isAuthenticated) next({ name: 'home' })
  else if (to.name == 'register' && isAuthenticated) next({ name: 'login' })
  else if (to.name == 'oshiPage' && !isAuthenticated) next({ name: 'home' })

  else next()
})

export default router
