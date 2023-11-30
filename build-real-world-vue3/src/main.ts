import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)
const gStore = reactive({ flashMessage: ''})
app.provide('gStore', gStore)
app.use(createPinia())
app.use(router)

app.mount('#app')
