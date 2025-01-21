<script setup>

import {Bell, ChevronDown, Inbox, Map, Search, Send, Trash2, UserRoundPlus, X} from "lucide-vue-next";
</script>

<template>
  <div class="row gap-4">
    <button class="btn btn-md btn-primary">
      <Search/>
      Search posts
    </button>

    <button class="btn btn-md btn-primary">
      <Send/>
      Submit changes
    </button>

    <button class="btn btn-md btn-outline">
      <X/>
      Cancel
    </button>

    <button class="btn btn-lg btn-primary">
      <Map/>
      Roadmap
    </button>

    <button class="btn btn-sm btn-danger">
      <Trash2/>
      Delete
    </button>

    <button class="btn btn-sm btn-primary">
      <UserRoundPlus/>
      Add people
    </button>

    <button class="btn-icon btn-primary">
      <UserRoundPlus/>
    </button>
    <button class="btn-icon btn-ghost">
      <Send/>
    </button>
    <button class="btn-icon btn-danger ">
      <Trash2/>
    </button>

    <button class="btn-icon btn-ghost">
      <Bell/>
      <span class="dot number">999+</span>
    </button>
    <button class="btn-icon btn-ghost">
      <Bell/>
      <span class="dot number urgent">3</span>
    </button>
    <button class="btn-icon btn-ghost">
      <Bell/>
      <span class="dot"></span>
    </button>
    <button class="btn btn-primary btn-md">
      <Inbox/>
      Mails
      <span class="divider-v"></span>
      <span class="number">62</span>
    </button>
    <button
      class="btn btn-primary btn-md"
    >Select more
      <ChevronDown class="h-3 w-3"/>
    </button>
  </div>
</template>

<style scoped>

</style>
