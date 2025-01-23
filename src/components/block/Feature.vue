<script setup>
const props = defineProps({
  icon: {
    type: [Object, Function], // Accepts a Vue component
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <li class="flex flex-col gap-2">
    <!-- Icon Component -->
    <div class="row gap-3">
      <component :is="icon" class="p-1 linear-green opacity-70 rounded-md h-7 w-7 text-white"/>

      <!-- Title as Prop -->
      <h3 class="text-base font-semibold text-gray-600">{{ title }}</h3>
    </div>
    <!-- Default Slot for Description -->
    <p class="text-gray-500">
      {{ description }}
    </p>
  </li>
</template>

<style scoped>
/* Add any custom styles here */
</style>
