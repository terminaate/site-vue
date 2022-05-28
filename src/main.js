import {createApp} from 'vue';

// Components
import App from './App.vue';
import Particles from "particles.vue3";

// CSS
import "./assets/css/root.css";

const app = createApp(App);

app.use(Particles);

app.config.errorHandler = (err) => {
    console.log(err);
}

app.mount("#app")
