import {createWebHistory, createRouter} from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import User from './components/User.vue'
import UserProfile from "./components/UserProfile.vue";
import UserPosts from "./components/UserPosts.vue";
import Components from "./components/Components.vue";
import Blocks from "./components/Blocks.vue";
import Base from "./components/Base.vue";
import Utility from "./components/Utility.vue";
import Roadmap from "./components/Roadmap.vue";

const routes = [
  {path: '/components', component: Components},
  {path: '/blocks', component: Blocks},
  {path: '/base', component: Base},
  {path: '/utility', component: Utility},
  {path: '/roadmap', component: Roadmap},
  {path: '/about', component: AboutView, name: 'about'},
  {path: '/', component: HomeView, name: 'home'},
  {
    path: '/user/:id', component: User, name: 'user',
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        name: 'profile',
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        name: 'posts',
        component: UserPosts,
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
