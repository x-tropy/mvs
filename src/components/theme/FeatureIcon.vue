<script setup>
import {Bug} from "lucide-vue-next";
const props = defineProps({
  color: {
    default: 'bg-blue-400',
    type: String
  },
  iconComponent: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-[78px] aspect-[1/1] mb-4 rounded-full flex items-center justify-center" :class="color">
    <div class="p-2 rounded-xl bg-white bg-opacity-35 shadow-lg">
      <component :is="iconComponent" class="drop-shadow-lg text-white h-7 w-7"/>
    </div>
  </div>
</template>

<style scoped>

</style>
