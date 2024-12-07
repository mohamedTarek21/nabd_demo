import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import axios from "./vendors/axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
const pinia = createPinia();

const app = createApp(App);

app.use(router).use(VueAxios, axios).use(pinia);

app.mount("#app");
