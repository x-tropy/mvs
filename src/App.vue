<script setup>
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {ref} from 'vue'
import Header from 'kit/navigation/Header.vue'
import ResizablePanelExample from "kit/container/ResizablePanelExample.vue";

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
    url: 'http://x.com/extropy_ai'
  }
]

const maskOn = ref(false)
const toggle = () => {
  maskOn.value = !maskOn.value
}

</script>


<template>
  <div class="flex h-screen flex-col">
    <Header @toggleMenusPanel="toggle" :textMenus="textMenus" :iconMenus="iconMenus" :maskOn="maskOn"/>
    <div class="flex-1 scrollable">
      <main class="wide my-10">
        <RouterView/>

      </main>
    </div>
    <div class="mask" @click="maskOn = !maskOn" :class="{'opacity-0 invisible': !maskOn}"></div>
  </div>
</template>
