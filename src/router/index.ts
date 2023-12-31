import { createRouter, createWebHistory } from 'vue-router'
import DashboadView from '@/views/DashboadView.vue'
import UsersView from '@/views/UsersView.vue'
import EditYoungListView from '@/views/EditYoungListView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/landing-state-vex',
      component: () => import('../views/ShellView.vue'),
      meta: {
        routes: [
          {
            icon: 'gauge-high',
            path: '/landing-state-vex/dashboard',
            name: 'Dashboard'
          },
          {
            icon: 'user',
            path: '/landing-state-vex/user',
            name: 'Users'
          },
          {
            icon: 'gas-pump',
            path: '/petrol',
            name: 'Pump'
          }
        ]
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: DashboadView,
          children: [
            {
              path: 'edit/:id',
              name: 'editYoungList',
              component: EditYoungListView,
              props: true
            }
          ]
        },
        {
          path: '/petrol',
          name: 'Pump',
          component: () => import('./../views/PumpView.vue')
        },

        {
          path: 'user',
          component: UsersView
        },
        {
          path: '',
          redirect: '/landing-state-vex/dashboard'
        },
        {
          path: '/:catchAll(.*)',
          name: 'NotFound',
          component: () => import('./../views/NotFoundView.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'LandingAuth',
      component: () => import('../views/auth/LandingAuthView.vue'),
      children: [
        {
          path: ':id',
          name: 'Login',
          component: () => import('./../views/auth/LoginView.vue')
        },
        {
          path: '',
          name: 'RedirectToLogin',
          redirect: '/auth/login'
        }
      ]
    },
    {
      path: '',
      redirect: '/landing-state-vex'
    }
  ]
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  if (!authStore.user.uid && to.name !== 'Login') {
    return { name: 'RedirectToLogin' }
  }
  if (authStore.user.uid && to.name == 'Login') {
    return { name: 'Dashboard' }
  }
})

export default router
