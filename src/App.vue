<script setup>
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {ref} from 'vue'
import Header from 'kit/navigation/Header.vue'
import {useMediaQuery} from '@vueuse/core'

const textMenus = [
  {
    text: 'UI Kit',
    url: '/ui-kit',
  },
  {
    text: 'Blocks',
    url: '/blocks',
  }, {
    text: 'Templates',
    url: '/templates',
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
    url: 'http://github.com/x-tropy/mvs'
  },
  {
    icon: faXTwitter,
    url: 'http://x.com/extropy_ui'
  }
]

const maskOn = ref(false)
const toggle = () => {
  maskOn.value = !maskOn.value
}

const isLargeScreen = useMediaQuery('(min-width: 768px)')

</script>


<template>
  <div class="sticky backdrop-blur w-full bg-white top-0 z-20" :class="!maskOn && 'bg-opacity-50'">
    <Header @toggleMenusPanel="toggle" :textMenus="textMenus" :iconMenus="iconMenus"
            :maskOn="maskOn"/>
  </div>
  <main class="wide my-20">
    <RouterView/>
  </main>
  <div class="mask" @click="maskOn = !maskOn" :class="{'opacity-0 invisible': !maskOn}"></div>
</template>
