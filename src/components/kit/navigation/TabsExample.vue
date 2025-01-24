<script setup>
import {Bell, Bug, Database, GitBranch, SquareTerminal} from "lucide-vue-next";
import FeatureIcon from "block/FeatureIcon.vue";
import {defineComponent, ref} from 'vue'
import Tabs from "kit/navigation/Tabs.vue";

const tabs = ref({
  Bug: {
    component: Bug,
    active: false,
    tooltip: 'Bugs<kbd class="ml-2 text-gray-400">Ctrl+B</kbd>'
  },
  Terminal: {
    component: SquareTerminal,
    active: false,
    tooltip: 'Terminal<kbd class="ml-2 text-gray-400">Ctrl+Shift+G</kbd>'
  },
  Database: {
    component: Database,
    active: false,
    tooltip: 'Database'
  },
  Git: {
    component: GitBranch,
    active: true,
    tooltip: 'Git'
  },
  Notification: {
    component: Bell,
    active: false,
    tooltip: 'Notification'
  },
});

const toggleTab = (tabName) => {
  // multi-select:
  // tabs.value[tabName].active ^= true

  // single select:
  if (activeTab.value !== tabName) {
    tabs.value[tabName].active = true
    if (activeTab.value) tabs.value[activeTab.value].active = false
    activeTab.value = tabName
  }
}

const activeTab = ref('Git')

</script>

<template>
  <div class="box row">
    <Tabs :tabs="tabs" direction="vertical" @toggleTab="toggleTab"/>
    <div class="flex-grow row justify-center">
    </div>
  </div>
</template>

<style scoped>

</style>
