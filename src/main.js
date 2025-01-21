import './assets/index.css'
import {createApp} from 'vue'
import router from './router.js'
import App from './App.vue'
import VueTippy from 'vue-tippy'
// import 'tippy.js/dist/tippy.css'
// import 'tippy.js/themes/light.css'
import 'tippy.js/animations/shift-away.css'

createApp(App)
  .use(router)
  .use(VueTippy, {
    directive: 'tippy', // v-tippy
    component: 'tippy', // <tippy/>
  })
  .mount('#app')
