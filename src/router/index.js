
import { createRouter, createWebHashHistory } from 'vue-router';
import { getAnchorList } from '../utils/anchor.js';
import { routes } from '../utils/category.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes.map(({name, path, url}) => ({
    name,
    path,
    component: () => import(`${url}`),
  }))
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
