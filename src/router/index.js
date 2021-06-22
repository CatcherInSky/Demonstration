
import { createRouter, createWebHashHistory } from 'vue-router';
import { getAnchorList } from '../utils/anchor.js';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      name: 'home',
      path: '/home', 
      component: () => import('views/home/index.vue'),
    },
    { 
      name: 'css-shapes',
      path: '/css-shapes', 
      component: () => import('views/css-shapes/index.vue'),
    },
    { 
      name: 'canvas',
      path: '/canvas', 
      component: () => import('views/canvas/index.vue'),
    },
    { 
      name: 'pikaqiu',
      path: '/pikaqiu', 
      component: () => import('views/pikaqiu/index.vue'),
    },
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
