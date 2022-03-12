import { createApp } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './routes';
import './assets/styles/main.scss';

const app = createApp(App);

app.component('font-awesome', FontAwesomeIcon);

app.use(router).mount('#app');
