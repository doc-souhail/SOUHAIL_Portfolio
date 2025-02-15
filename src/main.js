import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import 'aos/dist/aos.css';
import gsap from "gsap";


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')

document.getElementById("date").textContent = getFormattedDate();
const button = document.getElementById("menu__button")
const modale = document.getElementById("modale")

function getFormattedDate() {
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    };
    return `${new Date().toLocaleDateString("en-GB", options)}, France`;
}

function toggleModale(){
    modale.classList.toggle("active_modale");
}
button.addEventListener("click",toggleModale);

