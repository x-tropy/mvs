import {createWebHistory, createRouter} from 'vue-router'

import HomeView from './components/Home.vue'
import User from './components/User.vue'
import UserProfile from "./components/UserProfile.vue";
import UserPosts from "./components/UserPosts.vue";
import Kit from "./components/Kit.vue";
import Blocks from "./components/Blocks.vue";
import Templates from "./components/Templates.vue";
import Base from "./components/Base.vue";
import Utility from "./components/Utility.vue";
import Roadmap from "./components/Roadmap.vue";
import Icons from "doc/Icons.vue"

const routes = [
  {
    path: '/ui-kit', component: Kit, meta: {title: 'UI Kit 🔹'},
    children: [
      {
        path: 'icons', // This is a child route
        component: Icons,
        meta: {title: 'Icons'},
      }
    ]
  },
  {path: '/blocks', component: Blocks, meta: {title: 'Blocks 🔹🔹'}},
  {path: '/templates', component: Templates, meta: {title: 'Templates 🔹🔹🔹'}},
  {path: '/base', component: Base, meta: {title: 'Base / CSS'}},
  {path: '/utility', component: Utility, meta: {title: 'Utility / JavaScript'}},
  {path: '/roadmap', component: Roadmap, meta: {title: 'Roadmap 🗺️'}},
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

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title || 'mvs UI';
  document.title = title;
  next();
});

export default router
