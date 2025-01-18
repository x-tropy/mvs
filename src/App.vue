<script setup>
import logo from "./assets/logo.svg"
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {ref} from 'vue'

const menus = [
  'Components',
  'Blocks',
  'Base',
  'Utility',
  'Roadmap',
]

const activeMenu = ref('Components')
</script>


<template>
  <header
    class="wide h-14 row border-b justify-between border-gray-200">
    <RouterLink to="/"><img :src="logo"/></RouterLink>
    <div class="menus">
      <ul class="row gap-4 font-semibold text-sm h-full">
        <li v-for="el in menus"
            @click="activeMenu = el"
            class="text-gray-500 px-2 select-none row h-full hover:border-b-2 hover:border-cyan-200 hover:mb-[-1px]  hover:cursor-pointer hover:text-gray-800"
            :class="{'border-b-2 border-cyan-400 text-gray-800 mb-[-1px] hover:border-cyan-400 hover:text-gray-800': activeMenu === el}"
        >{{el}}</li>
      </ul>
      <span class="divider-v"></span>
      <a class="h-full text-gray-500 hover:text-gray-800" href="http://github.com/x-tropy/docroll"><font-awesome-icon class="h-5 aspect-square py-[18px] px-2" :icon="faGithub"/></a>
      <a class="h-full text-gray-500 hover:text-gray-800" href="http://github.com/x-tropy/docroll"><font-awesome-icon class="h-5 aspect-square py-[18px] px-2" :icon="faXTwitter"/></a>
    </div>
  </header>
  <h1 class="font-mono text-2xl italic font-black">Hello App!</h1>
  <p>
    <strong class="">Current route path 12345:</strong> {{ $route.fullPath }}
  </p>
  <p class="font-num text-4xl">123455</p>
  <nav>
    <RouterLink :to="{name: 'home'}">-> Home
    </RouterLink>

    <RouterLink :to="{name: 'about'}">-> About
    </RouterLink>

    <RouterLink :to="{
      name: 'posts',
      params: {id: 'jon'}
    }">
      -> Jon's posts
    </RouterLink>

    <RouterLink :to="{
      name: 'profile',
      params: { id: 'roy' }
    }">
      -> Roy's profile
    </RouterLink>

    <RouterLink :to="{
      name: 'posts',
      params: {id: 'roy'}
    }">
      -> Roy's posts
    </RouterLink>

    <RouterLink :to="{
      name: 'profile',
      params: { id: 'jon' }
    }">
      -> Jon's profile
    </RouterLink>

  </nav>
  <main>
    <RouterView/>
  </main>
</template>
