import { createApp } from 'vue'
import App from './App.vue'
import FirstChild from './components/FirstChild.vue'


const app = createApp(App)
app.component('firstChild', FirstChild)
app.mount('#app')
