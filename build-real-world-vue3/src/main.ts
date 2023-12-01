import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { gStore } from '@/helpers/utils'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.provide('gStore', gStore)
app.use(createPinia())
app.use(router)

app.mount('#app')
