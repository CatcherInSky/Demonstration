import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(router).use(Antd).mount('#app')
