import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue";
import Home from "../views/Home.vue"
import Profile from "../views/Profile.vue"
import Locations from "../views/Locations.vue"

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
  }
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