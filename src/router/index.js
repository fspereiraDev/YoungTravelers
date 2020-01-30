import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Locations from "../views/Locations.vue";
import LocationInfo from "../views/LocationInfo.vue"
import AdminPage from "../views/AdminPage.vue"
import ItinerariePage from "../views/Itineraries.vue"
import ItinerariesInfo from "../views/ItinerariesInfo.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/locations",
    name: "locations",
    component: Locations
  },
  {
    path: "/locationInfo",
    name: "locationInfo",
    component: LocationInfo
  },
  {
    path: "/adminPage",
    name: "adminPage",
    component: AdminPage
  },
  {
    path: "/itineraries",
    name: "itineraries",
    component: ItinerariePage
  },
  {
    path: "/itinerariesInfo",
    name: "itinerariesInfo",
    component: ItinerariesInfo
  },
];

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (this.$store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })

const router = new VueRouter({
  routes
});

export default router;