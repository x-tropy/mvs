<script setup>
import Header from "doc/Header.vue";
import ResizablePanel from "kit/container/ResizablePanel.vue";
import {IconList} from '@tabler/icons-vue'
import {useMediaQuery} from "@vueuse/core";

const isLargeScreen = useMediaQuery('(min-width: 768px)')
const menus = [
  'icons'
]
</script>

<template>
  <div class="flex">
    <div v-if="isLargeScreen" class="h-screen border-r border-gray-300 !overflow-x-clip scrollable-thin">
      <ResizablePanel panel-id="2">
        <ul>
          <li class="py-10 border-b border-gray-300 px-10" :key="key" v-for="(el, key) in menus">
            <RouterLink :to="'/ui-kit/'+el">{{el}}</RouterLink>
          </li>
        </ul>
      </ResizablePanel>
    </div>
    <div v-else class="float-btn-left">
      <div class="container">
        <IconList/>
        <span>Index</span>
      </div>
    </div>
    <div class="flex-1">
      <Header layout="tight"/>
      <div class="wide"><RouterView /></div>
    </div>
  </div>
</template>

<style scoped>

</style>
