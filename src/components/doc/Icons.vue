<script setup>
import * as icons from '@tabler/icons-vue'; // Replace with your node module
import {ref, computed} from 'vue';

const searchQuery = ref('');

// Convert imported icons into an array of { name, component }
const allIcons = Object.entries(icons)
  .filter(([name, icon]) =>
    typeof icon === 'function' && name !== 'createVueComponent'
  )
  .map(([name, component]) => ({
    name,
    component,
  }));

// filled, brand, arrow, circle, square, squarerounded, file&folder, number, device
const all = ref(false)
const other = ref(false)
const filled = ref(false)
const brand = ref(false)
const arrow = ref(false)

// Filter icons based on the search query
const filteredIcons = computed(() => {
    let searchFiltered = allIcons.filter(icon =>
      icon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    if (brand.value && filled.value) {
      return searchFiltered.filter(icon => icon.name.startsWith('IconBrand') || icon.name.endsWith('Filled'))
    } else if (brand.value) {
      return searchFiltered.filter(icon => icon.name.startsWith('IconBrand'))
    } else if (filled.value) {
      return searchFiltered.filter(icon => icon.name.endsWith('Filled'))
    }
    return searchFiltered
  }
);

function copyToClipboard(text, e) {
  navigator.clipboard.writeText(text)
  e.target.classList.add('bg-green-200')
  setTimeout(() => {
    e.target.classList.remove('bg-green-200')
  }, 1000)
}
</script>

<template>
  <div class="">
    <!-- Search Box -->
    <div class="row gap-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search icons..."
        class=""
      />
      <label for="brand"><input id="brand" type="checkbox" v-model="brand"/> Brand</label>
      <label for="filled"><input id="filled" type="checkbox" v-model="filled"/> Filled</label>
    </div>

    <!-- Icon Grid -->
    <div class="grid grid-cols-8">
      <div v-for="icon in filteredIcons" @click.prevent="copyToClipboard(icon.name, $event)" :key="icon.name"
           class="transition-colors bg-white py-4 gap-2 col">
        <component :is="icon.component" stroke="1.5"
                   class=" h-6 w-6 text-gray-600 rounded-md"/>
        <span class="text-xs text-gray-800 truncate w-full text-center">{{ icon.name.slice(4) }}</span>
      </div>
    </div>
  </div>
</template>

<style>
</style>
