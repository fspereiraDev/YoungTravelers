import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
// import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    user: {
      name: "Fábio Carvalho",
      email: "fabio@gmail.com",
      password: "fabio123",
      password2: "fabio123",
      is_admin: null
    }
  },

  getters: {
    getIsLoggedIn: state => {
      return state.isLoggedIn
    }
  },
  mutations: {
    LOGIN(state) {
      state.pending = true
    },
    LOGIN_SUCCESS(state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({
      commit
    }, data) {
      commit('LOGIN');
      return new Promise(resolve => {
        // simulation off http request
        setTimeout(() => {
          localStorage.setItem("token", "JWT");
          commit('LOGIN_SUCCESS');
          resolve(data);
        }, 1000);
      })
    },
    logout({
      commit
    }) {
      localStorage.removeItem("token");
      commit('LOGOUT');
    }
  },
  modules: {}
});