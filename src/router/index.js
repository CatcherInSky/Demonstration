import { getAnchorList } from '../utils/anchor';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      name: 'home',
      path: '/home', 
      component: () => import('views/home/index.vue'),
    },
    { 
      name: 'css',
      path: '/css', 
      component: () => import('views/css-shapes/index.vue'),
    },
    { 
      name: 'canvas',
      path: '/canvas', 
      component: () => import('views/canvas/index.vue'),
    }
  ]
});
router.beforeEach((to, from, next) => {
  if(to.name === undefined) {
    next({name: 'home'});
  } else {
    next();
  }
})
router.afterEach(() => {
  getAnchorList();
})
export default router
