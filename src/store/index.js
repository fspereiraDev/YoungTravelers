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
        image: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=MzRl8sjFub4fQffy8Qz2RzXsXNLlA+uzJcBOCCkrQUn8fYkrzpSga7rY/xtAthfpgEW0xV5Z7bs3LpwQbW8xXwp8/PfwzIu2ScbAPhmUs0XEsc0=",
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
        image: "https://www.medis.pt/media/1998/coliseu-porto-agora-e-coliseu-porto-ageas.jpg?anchor=center&mode=crop&width=1440&height=895&rnd=131719894510000000",
        name: "Coliseu Porto Ageas",
        lat: "41.146992",
        long: "-8.6076057",
        address: "R. de Passos Manuel 137, 4000-385 Porto",
        description: "O Coliseu do Porto é uma sala de espectáculos localizada na cidade do Porto, em Portugal. O edifício foi classificado como Monumento de Interesse Público pela Portaria n.º 637/2012, de 2 de novembro de 2012, publicada em Diário da República.",
        rating: "",
        website: "https://www.coliseu.pt/",
        tag: "Eventos"
      },
      {
        id: 3,
        image: "https://www.medis.pt/media/1998/coliseu-porto-agora-e-coliseu-porto-ageas.jpg?anchor=center&mode=crop&width=1440&height=895&rnd=131719894510000000",
        name: "Coliseu Porto Ageas",
        lat: "41.146992",
        long: "-8.6076057",
        address: "R. de Passos Manuel 137, 4000-385 Porto",
        description: "O Coliseu do Porto é uma sala de espectáculos localizada na cidade do Porto, em Portugal. O edifício foi classificado como Monumento de Interesse Público pela Portaria n.º 637/2012, de 2 de novembro de 2012, publicada em Diário da República.",
        rating: "",
        website: "https://www.coliseu.pt/",
        tag: "Eventos"
      },



    ]
  },

  getters: {
    getIsLoggedIn: state => {
      return state.isLoggedIn
    },
    getUsers: state => {
      return state.users
    },
    getLocations: state => {
      return state.locations
    },
    getUserId: state => {
      return state.users.id
    },

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
    },
    REGISTER(state, payload) {
      state.users.push(payload);
    },
    SET_USERS(state, payload) {
      state.users = payload;
    },
    /* Function that prepares localStorage with an empty array that will be
    populated once when the 1st register is done. So in this case we use it to store
    the information about the admin */
    PREPARE_LOCAL(state) {
      let admin = {
        name: "Fábio Carvalho",
        country: "Portugal",
        university: "Escola Superior de media Artes e Design",
        course: "Tecnologias e Desenvolvimento Web",
        email: "fabio@gmail.com",
        password: "fabio123",
        password2: "fabio123",
        tags: "",
        is_admin: null
      }

      state.users.push(admin);
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
          localStorage.setItem("token", JSON.stringify(data));
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
    },

    register(context, data) {
      context.commit('REGISTER', data);
    },

    setUsers(context, data) {
      context.commit('SET_USERS', data)
    },

    prepareLocal(context) {
      context.commit('PREPARE_LOCAL')
    }


  },
  modules: {}
});