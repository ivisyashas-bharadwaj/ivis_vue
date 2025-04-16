import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import vue3lottie from 'vue3-lottie';

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.mount('#app');
app.use(vue3lottie)
