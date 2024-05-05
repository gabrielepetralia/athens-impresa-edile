import { createApp } from "vue";
import App from './App.vue';
import { router } from './router'
import VueScrollTo from 'vue-scrollto';
import 'bootstrap/dist/js/bootstrap.js';
import "@fortawesome/fontawesome-free/js/all.js"

createApp(App).use(router).use(VueScrollTo).mount('#app')