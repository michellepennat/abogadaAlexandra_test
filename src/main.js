import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./sass/main.scss";
import store from "./store";
import router from "./router";

loadFonts();

const app = createApp(App).use(router);
app.use(vuetify);
app.use(store);
app.use(router);
app.mount("#app");
