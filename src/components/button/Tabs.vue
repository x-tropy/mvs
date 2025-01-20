<script setup>
import {Bell, Bug, Database, GitBranch, SquareTerminal} from "lucide-vue-next";
import FeatureIcon from "../theme/FeatureIcon.vue";
import {ref} from 'vue'

const icons = {
  Bug,
  SquareTerminal,
  Database,
  Bell,
  GitBranch,
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
        <button
          v-for="(icon, key) in icons"
          :key="key"
          :class="['btn-icon', activeIcon === key ? 'btn-secondary' : 'btn-ghost']"
          @click="setActiveIcon(key)"
        >
          <component :is="icon" />
        </button>
      </div>
    </div>
    <div class="flex-grow row justify-center">
      <div>
        <FeatureIcon :icon-component="icons[activeIcon]" color="bg-blue-500" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
