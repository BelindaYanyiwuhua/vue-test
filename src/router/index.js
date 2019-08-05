import Books from '@/components/Books'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 将下面的代码插入 `routes` 数组最后
export default new Router({
  routes:[{
      path: '/books',
      name: 'Books',
      component: Books
    }
  ]
})
