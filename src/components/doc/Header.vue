<script setup>
import {textMenus, iconMenus} from "doc/data.js";
import {ref} from 'vue'
import Header from 'kit/navigation/Header.vue'

defineProps({
  layout: {
    type: String,
    required: false
  }
})

const maskOn = ref(false)
const toggle = () => {
  maskOn.value = !maskOn.value
}
</script>

<template>
  <div class="sticky backdrop-blur w-full bg-white top-0 z-20" :class="!maskOn && 'bg-opacity-50'">
    <Header :class="layout === 'tight' && 'tight'" @toggleMenusPanel="toggle" :textMenus="textMenus" :iconMenus="iconMenus"
            :maskOn="maskOn"/>
  </div>
<!--  <div class="mask" @click="maskOn = !maskOn" :class="{'opacity-0 invisible': !maskOn}"></div>-->
</template>
