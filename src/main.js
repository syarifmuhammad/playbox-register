import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/customize-bootstrap.css';
import './assets/css/style.css';

const app = createApp(App);


app.use(createPinia());
app.use(VueSweetalert2);

app.mount("#app");
