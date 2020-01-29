import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
// import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    users: [],
    locations: [{
        id: 1,
        image: "https://live.staticflickr.com/4628/39267662975_36a9925e17_b.jpg",
        name: "Livraria Lello",
        lat: "41.1469055",
        long: "-8.6169633",
        address: "R. das Carmelitas 144, 4050-161 Porto",
        description: "A Livraria Lello é uma porta viva de acesso à história: pela preservação do edifício, pela manutenção da sua função original como livraria, pelo papel de embaixadora da cultura e pela dinâmica cultural que continua a imprimir na cidade.",
        rating: "",
        website: "https://www.livrarialello.pt/pt-pt/",
        tag: "Literatura"
      },
      {
        id: 2,
        image: "https://live.staticflickr.com/4628/39267662975_36a9925e17_b.jpg",
        name: "Estádio do Dragão",
        lat: "",
        long: "",
        address: "Via Futebol Clube do Porto, 4350-415 Porto",
        description: "O Estádio do Dragão é um estádio de futebol, localizado na freguesia de Campanhã, cidade do Porto, atualmente propriedade do FC Porto, sendo neste recinto que a equipa de futebol joga as suas partidas em casa.",
        rating: "",
        website: "https://www.fcporto.pt/pt/clube/estadio-do-dragao",
        tag: "Desporto"
      },
      {
        id: 3,
        image: "https://live.staticflickr.com/4628/39267662975_36a9925e17_b.jpg",
        name: "Coliseu Porto Ageas",
        lat: "41.146992",
        long: "-8.6076057",
        address: "R. de Passos Manuel 137, 4000-385 Porto",
        description: "O Coliseu do Porto é uma sala de espectáculos localizada na cidade do Porto, em Portugal. O edifício foi classificado como Monumento de Interesse Público pela Portaria n.º 637/2012, de 2 de novembro de 2012, publicada em Diário da República.",
        rating: "",
        website: "https://www.coliseu.pt/",
        tag: "Eventos"
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