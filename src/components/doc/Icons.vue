<script setup>
import * as icons from '@tabler/icons-vue'; // Replace with your node module
import {ref, computed} from 'vue';
import iconList from './icon-list.json'

let categorizedIcons = {}
iconList.forEach(obj => {
  const category = Object.keys(obj)[0]
  categorizedIcons[category] = obj[category]
})

console.log({categorizedIcons})

// Convert imported icons into an array of { name, component }
const allIcons = Object.entries(icons)
  .filter(([name, icon]) =>
    typeof icon === 'function' && name !== 'createVueComponent'
  )
  .map(([name, component]) => ({
    name,
    component,
  }));

const searchQuery = ref('');
const selectedCategories = ref([]);
const categoryNames = Object.keys(categorizedIcons)

// Filter icons based on the search query
const filteredIcons = computed(() => {
    let searchFiltered = allIcons.filter(icon =>
      icon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    if (selectedCategories.value.length > 0) {
      const allowedIcons = new Set(
        selectedCategories.value.flatMap(category => categorizedIcons[category])
      );
      searchFiltered = searchFiltered.filter(icon => allowedIcons.has(icon.name));
    }

    return searchFiltered;
  }
);

function copyToClipboard(text, e) {
  navigator.clipboard.writeText(text)
  console.log(e.target)
  e.target.classList.add('bg-green-300')
  setTimeout(() => {
    e.target.classList.remove('bg-green-300')
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

    <!-- category checkboxes -->
    <div class="row gap-4 my-5">
      <label v-for="category in categoryNames" :key="category" class="hover:cursor-pointer row gap-1">
        <input
          type="checkbox"
          :value="category"
          v-model="selectedCategories"
        />
        {{ category }}<span class="text-xs text-gray-400 font-bold font-num">{{categorizedIcons[category].length}}</span>
      </label>
    </div>

    <!-- Icon Grid -->
    <div class="row flex-wrap gap-2">
      <div v-for="icon in filteredIcons" @click="copyToClipboard(icon.name, $event)" :key="icon.name"
           class="item">
        <div class="wrap">
          <component class="h-5 w-5" :is="icon.component" stroke="2"/>
        </div>
        <span class="label">{{
            icon.name.slice(4)
          }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.item {
  @apply transition-colors bg-white hover:cursor-pointer gap-2 w-20 h-20 items-center flex flex-col;

  .wrap {
    @apply p-1 mt-3 text-gray-600 rounded bg-white transition-colors;
  }

  .label {
    @apply text-xs font-semibold text-gray-300 break-words leading-none w-full text-center transition-colors;
  }

  &:hover .wrap {
    @apply bg-gray-600 text-white;
  }

  &:hover .label {
    @apply text-gray-600;
  }
}
</style>
