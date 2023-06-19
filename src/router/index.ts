import { createRouter, createWebHistory } from 'vue-router'
import DashboadView from '@/views/DashboadView.vue'
import UsersView from '@/views/UsersView.vue'
import EditYoungListView from '@/views/EditYoungListView.vue'

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
          }
        ]
      },
      children: [
        {
          path: 'dashboard',
          component: DashboadView,
          children: [
            {
              path: 'edit',
              name: 'editYongList',
              component: EditYoungListView
            }
          ]
        },
        {
          path: 'user',
          component: UsersView
        },
        {
          path: '',
          redirect: '/landing-state-vex/dashboard'
        }
      ]
    },
    {
      path: '',
      redirect: '/landing-state-vex'
    }
  ]
})

export default router

// children : [{
//     path : '/',
//     name : 'Dashboard',
//     component :
// }, {
//     path : '/user',
//     name : 'Users',
//     component : () => import('../views/UsersView.vue')
// }]
