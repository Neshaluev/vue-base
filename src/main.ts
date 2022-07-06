import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.scss'

import install from './components/base'

// import directive from "@/dereactive/VIntersection";

const app = createApp(App)

// install(app);

// app.component(Button.name, Button);
// app.directive(directive.name, directive);

app.use(install).use(store).use(router).mount('#app')
