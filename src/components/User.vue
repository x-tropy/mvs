<script setup>
function onBeforeEnter(el) {
  console.log('Before enter:', el);
}

function onAfterEnter(el) {
  console.log('After enter:', el);
}

import {ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const transitionName = ref('slide-from-right')

// Track previous route
let previousRoute = null

router.beforeEach((to, from) => {
  console.log({to, from, previousRoute})
  if (previousRoute) {
    const currentIndex = router.options.routes.findIndex(r => r.name === to.name)
    const previousIndex = router.options.routes.findIndex(r => r.name === previousRoute.name)

    console.log(router.options.routes)
    transitionName.value = currentIndex < previousIndex ? 'slide-from-left' : 'slide-from-right'
  }
  previousRoute = from
})
</script>

<template>
  <div>
    User -> {{ $route.params.id }}
    <RouterView v-slot="{Component}">
      <transition :name="transitionName" mode="out-in" @before-enter="onBeforeEnter"
                  @after-enter="onAfterEnter">
        <!--        the div ensures the transition hooks are applied to a consistent DOM element-->
        <div :key="$route.fullPath">
          <component :is="Component"/>
        </div>
      </transition>
    </RouterView>
  </div>
</template>
