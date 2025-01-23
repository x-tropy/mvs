<script setup>
import {Milestone, Settings, BicepsFlexed, ArrowRight, Map, Lightbulb} from "lucide-vue-next";
import Feature from "block/Feature.vue";

const features = [
  {
    icon: Milestone, title: 'Opinionated by Design',
    description: 'Every design choice is intentional & justified. Each component prioritizes simplicity and avoids unnecessary complexity. Stick with Tailwind & Vue 3—No bloat, no overengineering, just clean, minimal, and practical features.'
  },
  {
    icon: BicepsFlexed, title: 'Easy to Use',
    description: 'mvs UI includes only the core essentials. Components are designed as intuitive building blocks. Developers can assemble them like playing with Legos. Solve real problems, not fiddling with UI details.'
  },
  {
    icon: Settings, title: 'Fully Customizable',
    description: 'Every component is designed for "copy & go" usability. Without deep abstractions, the codebase is flat, clean, and easy to modify. Developers can adapt components to their unique needs without feeling restricted.'
  },
  {
    icon: Lightbulb, title: 'Educational',
    description: 'mvs UI is more than just a tool, it’s also a learning resource. The straightforward code structure makes it easy to understand how things work, empowering developers to grow their skills while building projects.'
  },
]
</script>

<template>
  <div>
    <div class="mx-auto w-full px-5 mt-10 md:mt-20 md:w-2/3 xl:w-1/2">
      <h1 class="mt-10 font-bold text-gray-800 text-4xl md:text-5xl text-center tracking-tight">Minimalist Web UI
        Solution</h1>
      <h2 class="mt-5 mb-10 font-medium text-gray-400 text-xl text-center">
        <slot>
          mvs UI provides a <span
          class="highlight">m</span>inimum <span
          class="highlight">v</span>iable <span class="highlight">s</span>et of Vue components, designed to
          accelerate
          frontend development by 10x.
        </slot>
      </h2>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mx-5 lg:mx-20">
      <Feature v-for="(feature, i) in features"
               :key="index"
               :icon="feature.icon"
               :title="feature.title"
               :description="feature.description"
      ></Feature>
    </ul>
    <div class="flex justify-center gap-3 sm:gap-5 mt-10">
      <RouterLink to="roadmap">
        <button class="btn btn-lg btn-outline w-full sm:w-auto">
          <Map/>
          Roadmap
        </button>
      </RouterLink>
      <RouterLink to="ui-kit">
        <button class="btn btn-lg btn-primary w-full sm:w-auto">Get started
          <ArrowRight/>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.highlight {
  @apply text-cyan-400 font-bold underline underline-offset-4 decoration-cyan-300;
}
</style>
