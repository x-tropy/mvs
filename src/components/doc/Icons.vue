<script setup>
import {icons} from '@tabler/icons-vue'
import {IconStar, IconSearch} from '@tabler/icons-vue'
import {ref, computed, onMounted} from 'vue';
import {categoryIconNames} from "doc/data.js";
import {useStorage} from '@vueuse/core'
import {debounce} from "lodash-es";

// { Animal: ['IconCat', 'IconDog', ... ], Health: [], ...}
import groupedIconNames from './icon-list.json'

const groupedIconsSet = new Set(Object.values(groupedIconNames).flat());
const ungroupedIcons = Object.keys(icons).filter(icon => !groupedIconsSet.has(icon));

// Create 'Other' and 'Filled' groups
groupedIconNames.Other = ungroupedIcons.filter(icon => !icon.endsWith('Filled'));
groupedIconNames.Filled = ungroupedIcons.filter(icon => icon.endsWith('Filled'));

// {Animal: {IconCat, IconDog}, Health: {}, ... }
const groupedIcons = {}
Object.entries(groupedIconNames)
  // category: 'Animal', names: ['IconCat', 'IconDog', ... ]
  .forEach(([category, names]) => {
    const obj = {}
    names.forEach(name => obj[name] = icons[name])
    groupedIcons[category] = obj
  })

// [ {icon: IconCat, count: 11, name: 'Animals'}, {}, ...]
const categories = []
Object.entries(categoryIconNames)
  .forEach(([category, iconName]) => {
    categories.push({
      icon: icons[iconName],
      count: groupedIconNames[category].length,
      name: category
    })
  })

const searchQuery = ref('');
const debouncedSearch = ref('')
const categoryNames = useStorage('selected-icon-categories', [])

function splitCamelCase(str) {
  return str.match(/[A-Z][a-z]*|\d+/g).map(word => word.toLowerCase());
}

// Filter icons based on the search query
const categoriesToRender = computed(() => {
  let result = {}
  if (debouncedSearch.value !== '') {
    const queries = debouncedSearch.value.toLowerCase().split(' ')
    const results = {}
    Object.keys(icons).filter(iconName => {
      const flatIconName = iconName.toLowerCase().slice(4)
      const iconWords = splitCamelCase(iconName.slice(4))

      // ['!app'] ——x-> 'apple', 'brandapple', 'brandapplenews'
      const shouldExclude = queries.some(query => {
        if (query[0] === '!' && flatIconName.includes(query.slice(1))) {
          return true
        } else {
          return false
        }
      })
      if (shouldExclude) return false

      // ['_app', 'arrow_'] --> 'IconApple', 'IconRightArrow'
      const shouldInclude = queries.some(query => {
        // preliminary condition should pass first
        const queryNoWildChar = query.replace(/[!_]/g, '')
        if (!flatIconName.includes(queryNoWildChar)) return false

        console.log(query)
        // deal with wild char matching
        if (query.at(0) === '_' && query.at(-1) === '_') {
          return iconWords.some(word => word === queryNoWildChar)
        } else if (query.at(0) === '_') {
          return iconWords.some(word => word.startsWith(queryNoWildChar))
        } else if (query.at(-1) === '_') {
          return iconWords.some(word => word.endsWith(queryNoWildChar))
        }
        console.log(iconName)
        return true
      })
      return shouldInclude
    }).forEach(iconName => results[iconName] = icons[iconName])

    result['Search results'] = results
  }
  categoryNames.value.forEach(category => result[category] = groupedIcons[category])
  return result;
});

// Create a debounced function
const updateSearch = debounce((value) => {
  debouncedSearch.value = value
}, 1000) // Adjust debounce time as needed

// Watch for input changes and debounce them
const onInput = (event) => {
  updateSearch(event.target.value)
}

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
        @input="onInput"
        v-model="searchQuery"
        placeholder="Search icons..."
        class="border-2 my-8 px-3 w-1/2"
      />
    </div>

    <!-- category checkboxes -->
    <div class="row gap-1">
      <label v-for="category in categories" :key="category.name"
             class="hover:cursor-pointer p-2 hover:bg-cyan-100 text-sm text-gray-800 w-48 font-semibold row gap-1">
        <input type="checkbox" :value="category.name" v-model="categoryNames"/>
        <component :is="category.icon" stroke="1.5" class="h-5 w-5 text-gray-600"/>
        {{ category.name }}
        <span class="text-xs text-gray-400 font-num">· {{ category.count }}</span>
      </label>
    </div>

    <!-- Icon Grid -->
    <div class="my-14" v-for="(categoryIcons, categoryName) in categoriesToRender">
      <h2
        class="font-extrabold text-2xl border-b-2 tracking-tight text-gray-600 pb-2 mb-4 border-gray-300 row gap-2">
        <component stroke="2" :is="icons[categoryIconNames[categoryName]] || IconSearch"
                   class="h-6 w-6 p-0.5 text-white bg-gray-500 rounded"/>
        {{ categoryName }}
        <span class="font-normal text-lg text-gray-400">({{ Object.keys(categoryIcons).length }})</span>
      </h2>
      <div class="row flex-wrap gap-2">
        <div v-for="(iconComponent, iconName) in categoryIcons"
             @click="copyToClipboard(iconName, $event)" :key="iconName"
             class="item">
          <IconStar class="btn-favorite"/>
          <div class="wrap">
            <component class="h-6 w-6" :is="iconComponent" stroke="1.65"/>
          </div>
          <span class="label">
              {{ iconName.slice(4) }}
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.item {
  @apply transition-colors bg-white hover:cursor-pointer hover:bg-cyan-100 gap-2 w-20 h-20 items-center flex flex-col relative;

  .btn-favorite {
    @apply opacity-0 transition-all h-6 w-6 p-1 bg-yellow-100 rounded text-yellow-400  absolute -top-1 -right-1;

    &:hover {
      @apply text-yellow-500;
    }
  }

  .wrap {
    @apply p-1 mt-3 text-gray-600 rounded bg-white transition-colors;
  }

  .label {
    @apply text-xs text-gray-400 break-words leading-tight w-full text-center transition-colors;
  }

  &:hover .wrap {
    @apply bg-gray-600 text-white;
  }

  &:hover .label {
    @apply text-gray-600;
  }

  &:hover .btn-favorite {
    @apply opacity-100;
  }
}
</style>
