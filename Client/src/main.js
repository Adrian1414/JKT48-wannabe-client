import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";
import YouTube from 'vue3-youtube'

import './assets/style.css'

const app = createApp(App);
const pinia = createPinia();

app.use(vue3GoogleLogin, {
  clientId:
    "412763653109-5mlsa0cv362nebiusrlhd766gc0nohq4.apps.googleusercontent.com",
});

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(router);
app.use(pinia);
app.component('YouTube', YouTube)

const options = {
    // You can set your default options here
    position: "top-right",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.use(Toast, options);

app.mount("#app");