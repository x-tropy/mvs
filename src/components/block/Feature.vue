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
  <li class="flex flex-col gap-3">
    <!-- Icon Component -->
    <component :is="icon" class="p-2 linear-green opacity-70 rounded-md h-12 w-12 text-white"/>

    <!-- Title as Prop -->
    <h3 class="text-lg font-semibold text-gray-600">{{ title }}</h3>
    <!-- Default Slot for Description -->
    <p class="text-gray-500">
      {{ description }}
    </p>
  </li>
</template>

<style scoped>
/* Add any custom styles here */
</style>
