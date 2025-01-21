<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {Search, ChevronDown,GitBranch, Database, SquareTerminal, Bug, Inbox, Send, X, Map, Trash2, Bell, UserRoundPlus} from "lucide-vue-next"
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
        <kbd class="lg-show text-xs font-semibold !text-gray-400 rounded-sm px-1 py-0.5 btn-outline">Ctrl+K</kbd>
      </button>
      <span class="divider-v lg-show"></span>
      <a v-for="el in iconMenus" target="_blank" class="menu-item" :href="el.url">
        <font-awesome-icon class="menu-icon" :icon="el.icon"/>
      </a>
      <div class="menu-item" v-tippy="{ content: 'NotificationNotificationNotificationNotification', offset:[0, 0], trigger:'mouseenter click', animation: 'shift-away', interactive: true, placement: 'bottom' }">
        <button class="btn-icon btn-ghost">
          <Bell/>
          <span class="dot"></span>
        </button>
      </div>
    </nav>
    <!--    <div class="absolute bg-white w-full left-0 top-14">abc</div>-->
  </header>


  <main class="wide">

    <RouterView/>
  </main>
  <div class="mask" @click="maskOn = !maskOn" :class="{'hidden': !maskOn}"></div>
</template>
