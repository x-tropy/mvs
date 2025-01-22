<script setup>
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {ref} from 'vue'
import Header from 'Components/navigation/Header.vue'
import ResizablePanelExample from "Components/container/ResizablePanelExample.vue";
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
const toggle = () => {
  maskOn.value = !maskOn.value
}

</script>


<template>
  <Header @toggleMenusPanel="toggle" :textMenus="textMenus" :iconMenus="iconMenus" :maskOn="maskOn"/>
  <main class="wide my-10">
    <ResizablePanelExample/>
  </main>
  <div class="mask" @click="maskOn = !maskOn" :class="{'opacity-0 invisible': !maskOn}"></div>
</template>
