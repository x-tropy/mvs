<script setup>
import {Tippy} from "vue-tippy";

const emit = defineEmits(['activateTab'])

defineProps({
  tabs: {
    type: Object,
    required: true,
    default: () => []
  },
  direction: {
    type: String,
    default: 'vertical',
    validator(value) {
      return ['horizontal', "vertical"].includes(value)
    }
  }
})

const toggleTab = (tabName) => {
  emit("toggleTab", tabName)
}

</script>

<template>
  <div class="w-[34px] p-1 bg-white">
    <div class="flex gap-3" :class="direction === 'vertical' && 'flex-col'">
      <Tippy animation="shift-away" placement="right"  :arrow="false" v-for="(obj, key) in tabs">
        <button
          :key="key"
          class="btn-icon"
          :class="obj?.active ? 'btn-secondary' : 'btn-ghost'"
          @click="toggleTab(key)"
        >
          <component :is="obj.component"/>
        </button>
        <template #content>
          <span v-html="obj?.tooltip"></span>
        </template>
      </Tippy>
    </div>
  </div>
</template>
