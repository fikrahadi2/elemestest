import { createApp } from 'vue'
import App from '@/App.vue'
import IconBase from '@/components/IconBase'// svg component

// register globally
const app = createApp(App);
app.component('icon-base', IconBase)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
