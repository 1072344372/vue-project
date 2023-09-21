import './assets/main.css'
// 创建实例
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'





const app = createApp(App);//确保 _use_ 路由实例使整个应用支持路由。
app.use(router);// 挂载router,完成
app.mount('#app');




// createApp(App).mount('#app')


