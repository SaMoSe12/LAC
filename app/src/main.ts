import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
  FaUser,
  FaUserPlus,
  FaPlus,
  FaTimes,
  FaBars,
  FaChartLine,
  FaSearch,
  FaStar,
  FaHeart,
  FaMobile,
  FaRegularHeart,
  FaMoon,
  FaSun,
  FaEnvelope,
} from "oh-vue-icons/icons/fa";
import {
  CoFacebook,
  CoInstagram,
  CoTwitter,
  CoYoutube,
  CoLinkedin,
} from "oh-vue-icons/icons/co";
import {
  RiUserStarLine,
  RiEyeCloseLine,
  RiEyeLine,
} from "oh-vue-icons/icons/ri";
import { BiCalendar2 } from "oh-vue-icons/icons/bi";

import "./style.css";

import App from "./App.vue";

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
  FaMoon,
  FaMobile,
  FaEnvelope,
  FaSun,
  RiUserStarLine,
  RiEyeCloseLine,
  RiEyeLine,
  BiCalendar2,
  CoFacebook,
  CoInstagram,
  CoTwitter,
  CoYoutube,
  CoLinkedin
);

/**
 *?  Pages
 **/
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Servicios from "./pages/Servicios.vue";
import Contacto from "./pages/Contacto.vue";
import Blogs from "./pages/Blogs.vue";
import Blog from "./pages/Blog.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/servicios", component: Servicios, name: "servicios" },
  { path: "/contacto", component: Contacto, name: "contacto" },
  { path: "/ideas", component: Blogs, name: "blogs" },
  { path: "/idea/:id", component: Blog, name: "blog" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).component("v-icon", OhVueIcon).mount("#app");
