<script setup>
import Header from "doc/Header.vue";
import ResizablePanel from "kit/container/ResizablePanel.vue";
import {IconList} from '@tabler/icons-vue'
import {useMediaQuery} from "@vueuse/core";

const isLargeScreen = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <div class="flex">
    <div v-if="isLargeScreen" class="h-screen border-r border-gray-300 !overflow-x-clip scrollable-thin">
      <ResizablePanel panel-id="2">
        <ul>
          <li class="py-[100px] border-b px-10" :key="key" v-for="(el, key) in [1,2,3,4,5,6,7,8,9,10]">
            <span >{{el}}</span>
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
    </div>
  </div>
</template>

<style scoped>

</style>
