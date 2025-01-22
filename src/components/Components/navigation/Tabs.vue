<script setup>
import {Bell, Bug, Database, GitBranch, SquareTerminal} from "lucide-vue-next";
import FeatureIcon from "Blocks/FeatureIcon.vue";
import {ref} from 'vue'
import {Tippy} from "vue-tippy";

const icons = {
  Bug: {
    component: Bug,
    shortcut: 'Alt+8'
  },
  Terminal: {
    component: SquareTerminal,
    shortcut: 'Ctrl+Shift+T',
  },
  Database: {
    component: Database,
  },
  Git: {
    component: GitBranch,
    shortcut: 'Ctrl+G'
  },
  Notification: {
    component: Bell,
  },
};

const activeIcon = ref('Database')

const setActiveIcon = (iconName) => {
  activeIcon.value = iconName
}

</script>

<template>
  <div class="box row">
    <div class="w-[34px] p-1 bg-white">
      <div class="flex flex-col gap-3">
        <Tippy animation="shift-away" placement="right" :arrow="false" v-for="(obj, key) in icons">
          <button
            :key="key"
            :class="['btn-icon', activeIcon === key ? 'btn-secondary' : 'btn-ghost']"
            @click="setActiveIcon(key)"
          >
            <component :is="obj.component"/>
          </button>
          <template #content>
            <div class="">
              {{ key }} <code v-if="obj?.shortcut" class="text-gray-400 ml-2">{{ obj.shortcut }}</code>
            </div>
          </template>
        </Tippy>
      </div>
    </div>
    <div class="flex-grow row justify-center">
      <div>
        <FeatureIcon :icon-component="icons[activeIcon].component" color="bg-blue-500"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
