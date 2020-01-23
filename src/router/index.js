import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue";
import Home from "../views/Home.vue"
import Profile from "../views/Profile.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
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