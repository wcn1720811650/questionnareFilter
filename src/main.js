import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';




createApp(App).use(router).use(Antd).mount('#app')
