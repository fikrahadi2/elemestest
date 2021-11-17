import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueStarRating from 'vue-star-rating'
//import * as VueSvgLoader from 'vue-svg-loader'
import "./icons"

const app = createApp(App);
app.component('star-rating', VueStarRating)
//app.use(VueSvgLoader)
app.use(router)
app.mount('#app')