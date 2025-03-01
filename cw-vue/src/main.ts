import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeView from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { Button, Card, ConfirmDialog } from 'primevue'
import { ConfirmationService } from 'primevue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeView, { theme: { preset: Aura }})
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)

app.component('Button', Button)
app.component('Card', Card)
app.component('ConfirmDialog', ConfirmDialog)

app.mount('#app')
