<script setup>
import {ref, onUnmounted} from 'vue';
import {useStorage} from "@vueuse/core";

// Props for snapping behavior
const props = defineProps({
  panelId: {type: Number, default: 1},
  initialSize: {type: Number, default: 200},
  direction: {type: String, default: 'horizontal'},
  minSize: {type: Number, default: 60}, // Minimum panel size
  maxSize: {type: Number, default: 800}, // Maximum panel size
  stops: {type: Array, default: () => []}, // Array of snapping stops
  snapScope: {type: Number, default: 10}, // Range to trigger snapping
});

const panelSize = useStorage('mvs-panel-size-' + props.panelId, props.initialSize)
// reset if met invalid value
if (!panelSize.value) panelSize.value = props.initialSize
const isResizing = ref(false);
let startPos = 0;
let startSize = 0;

const startResize = (e) => {
  isResizing.value = true;
  startPos = props.direction === 'horizontal' ? e.clientX : e.clientY;
  startSize = panelSize.value;
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
};

const resize = (e) => {
  const delta = props.direction === 'horizontal'
    ? e.clientX - startPos
    : startPos - e.clientY;
  let newSize = startSize + delta;

  console.log({startSize, newSize, delta})
  // Find the closest stop within the snapScope
  const nearestStop = props.stops.find(
    (stop) => Math.abs(newSize - stop) < props.snapScope
  );

  if (nearestStop !== undefined) {
    newSize = nearestStop; // Snap to the nearest stop
  }

  // Clamp the width to the range
  newSize = Math.max(props.minSize, Math.min(props.maxSize, newSize));

  // Update the panelSize
  panelSize.value = newSize;
};

const stopResize = () => {
  isResizing.value = false;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
};

onUnmounted(() => {
  if (isResizing.value) {
    stopResize();
  }
});
</script>

<template>
  <div
    class="panel-wrap"
    :style="direction === 'horizontal' ? { width: panelSize + 'px' } : { height: panelSize + 'px' } "
    :class="direction === 'horizontal' ? 'horizontal' : 'vertical'"
  >
    <div
      v-if="direction !== 'horizontal'"
      class="resize-handle-v"
      @mousedown="startResize"
    >
    </div>
    <div class="panel-content">
      <slot/>
    </div>
    <div
      v-if="direction === 'horizontal'"
      class="resize-handle-h"
      @mousedown="startResize"
    >
    </div>
  </div>
</template>

<style scoped>
.panel-wrap {
  @apply flex items-stretch;
}

.panel-content {
  @apply flex-1 break-all h-full;
}

.resize-handle-h {
  @apply cursor-ew-resize w-3 relative left-1.5;

  &::after {
    content: '';
    @apply block hover:bg-cyan-200 active:bg-cyan-300 transition-colors w-1 h-full absolute right-1;
  }
}

.resize-handle-v {
  @apply cursor-ns-resize h-3 relative -top-1.5;

  &::after {
    content: '';
    @apply block hover:bg-cyan-200 active:bg-cyan-300 transition-colors h-1 w-full absolute top-1;
  }
}

.horizontal {
  .panel-content {
    @apply -mr-3;
  }
}

.vertical {
  @apply flex-col;

  .panel-content {
    @apply -mt-3;
  }
}
</style>
