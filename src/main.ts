import { createApp } from "vue";
import App from "~/App.vue";
import "./index.css";

const app = createApp(App);

// pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

// router
import { router } from "~/router";
app.use(router);

// element plus
import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import "./styles/element/index.scss";
app.use(ElementPlus);

app.mount("#app");
