<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {Search, ChevronDown} from "lucide-vue-next"
import {useWindowSize} from '@vueuse/core'
import {computed, ref} from 'vue'

const {width, height} = useWindowSize()

const textMenus = [
  {
    text: 'Components',
    url: '/components',
  },
  {
    text: 'Blocks',
    url: '/blocks',
  },
  {
    text: 'Base',
    url: '/base',
  },
  {
    text: 'Utility',
    url: '/utility',
  },
  {
    text: 'Roadmap',
    url: '/roadmap',
  },
  {
    text: 'Resume',
    url: 'https://docroll.fly.dev',
    external: true
  }
]

const iconMenus = [
  {
    icon: faGithub,
    url: 'http://github.com/x-tropy/docroll'
  },
  {
    icon: faXTwitter,
    url: 'http://github.com/x-tropy/docroll'
  }
]

const maskOn = ref(false)
const panelOn = computed(() => maskOn.value)
const togglePanel = () => {
  maskOn.value = !maskOn.value
}
</script>


<template>

  <header class="navbar">
    <RouterLink to="/" class="logo"></RouterLink>
    <nav class="menus-wrap">
      <button
        class="menu-item menu-text sm:hidden"
        @click="togglePanel"
      >Menu items
        <ChevronDown class="ml-1 h-3 w-3"/>
      </button>
      <ul class="menus-wrap" :class="{'panel-drop': width < 640, '!hidden': !panelOn && width < 640}">
        <li
          class="h-full"
          v-for="el in textMenus"
        >
          <a
            v-if="el?.external"
            :href="el.url"
            class="menu-item menu-text"
            target="_blank">
            {{ el.text }}
            <span class="external">↗</span>
          </a>
          <RouterLink
            v-else
            :to="el.url"
            :key="el.text"
            class="menu-item menu-text"
            :class="{active: $route.fullPath.endsWith(el.url)}"
          >{{ el.text }}
            <span class="indicator"></span>
          </RouterLink>
        </li>
      </ul>
      <span class="divider-v lg-show"></span>
      <button class="menu-item">
        <Search class="menu-icon"/>
        <span class="lg-show ml-1 mr-6 text-sm text-gray-400">Search...</span>
        <kbd class="lg-show text-xs font-semibold text-gray-400 rounded-sm px-1 py-0.5 bg-gray-100 border">Ctrl+K</kbd>
      </button>
      <span class="divider-v lg-show"></span>
      <a v-for="el in iconMenus" target="_blank" class="menu-item" :href="el.url">
        <font-awesome-icon class="menu-icon" :icon="el.icon"/>
      </a>
    </nav>
    <!--    <div class="absolute bg-white w-full left-0 top-14">abc</div>-->
  </header>

  <h1 class="font-mono text-2xl italic font-black">{{ width }}</h1>
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
  <main class="z-0">
    <RouterView/>
  </main>
  <div class="mask" @click="maskOn = !maskOn" :class="{'hidden': !maskOn}"></div>
</template>
