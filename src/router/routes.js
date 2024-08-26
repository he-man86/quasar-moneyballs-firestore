const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageIndex.vue') },
      { path: 'settings', component: () => import('pages/PageSettings.vue')} ,
      { path: 'analytics', component: () => import('pages/PageAnalitics.vue')},
      { path: 'settings', component: () => import('pages/PageSettings.vue') },
      { path: 'help', component: () => import('pages/PageHelp.vue') },
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageAuth.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
