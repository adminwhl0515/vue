import Home from '@/components/Home/index.vue'
import HomeHerder from '@/components/Home/Header/index.vue'

import Kind from '@/components/Kind/index.vue'
import KindHerder from '@/components/Kind/Header/index.vue'

import Cart from '@/components/Cart/index.vue'
import CartHerder from '@/components/Cart/Header/index.vue'

import User from '@/components/User/index.vue'
import UserHerder from '@/components/User/Header/index.vue'

import MainFooter from '@/components/MainFooter/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: {
      header: HomeHerder,
      content: Home,
      footer: MainFooter
    }
  },
  {
    path: '/kind',
    components: {
      header: KindHerder,
      content: Kind,
      footer: MainFooter
    }
  },
  {
    path: '/cart',
    components: {
      header: CartHerder,
      content: Cart,
      footer: MainFooter
    }
  },
  {
    path: '/user',
    components: {
      header: UserHerder,
      content: User,
      footer: MainFooter
    }
  }
]

export default routes
