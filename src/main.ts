import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { registerAntd } from './utils/register-antd';


const app = createApp(App);

registerAntd(app);

app.use(router)
.mount('#app')
