import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import App from './App.vue';
const { createApp } = require('vue');

createApp(App).use(PrimeVue, { ripple: true }).use(ToastService).mount('#app');
