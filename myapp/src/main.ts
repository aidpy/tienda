import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'

import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';

const pinia = createPinia()
const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('InputNumber', InputNumber)

app.use(pinia)
app.mount('#app')