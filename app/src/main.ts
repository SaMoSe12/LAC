import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaUser, FaUserPlus, FaPlus, FaTimes, FaBars, FaChartLine, FaSearch, FaStar, FaHeart, FaRegularHeart } from 'oh-vue-icons/icons/fa'
import { RiUserStarLine } from 'oh-vue-icons/icons/ri'

import './style.css'

import App from './App.vue'

addIcons(
    FaUser,
    FaUserPlus,
    FaPlus,
    FaTimes,
    FaBars,
    FaChartLine,
    FaSearch,
    FaStar,
    FaHeart,
    FaRegularHeart,
    RiUserStarLine
)


/**
 *?  Pages
 **/
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Servicios from './pages/Servicios.vue'
import Contacto from './pages/Contacto.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/servicios', component: Servicios },
    { path: '/contacto', component: Contacto },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .component('v-icon', OhVueIcon)
    .mount('#app')
