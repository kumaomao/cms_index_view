import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Article from '@/pages/article/article'
Vue.use(Router);

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      name:'首页'
    },
      {
          path: '/article',
          name: 'article',
          component: Article,
          name:'文章'
      },

  ]
})
