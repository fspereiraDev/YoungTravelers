import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";
// import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    users: [{
      id: "1",
      name: "Admin",
      country: "Portugal",
      university: "",
      course: "",
      email: "admin_yt@gmail.com",
      password: "admin",
      password2: "admin",
      tags: "",
      user_type: 1
    },
    {
      id: "2",
      name: "John Doe",
      country: "England",
      university: "England University",
      erasmus_university: "Escola Superior de Media Artes e Design",
      course: "Tecnologias e Sistemas de Informação para a Web",
      email: "john@gmail.com",
      password: "john123",
      password2: "john123",
      tags: ["desporto", "literatura", "música"],
      user_type: 2
    },
    {
      id: "3",
      name: "Rokas Grabauskas",
      country: "Lithuania",
      university: "Lithuania University",
      erasmus_university: "Escola Superior de Media Artes e Design",
      course: "Tecnologias e Sistemas de Informação para a Web",
      email: "rokas@gmail.com",
      password: "rokas123",
      password2: "rokas123",
      tags: ["Desporto", "Literatura", "Música"],
      user_type: 2
    }
    ],
    locations: [{
      id: 1,
      image: "https://www.comerciocomhistoria.gov.pt/wp-content/uploads/import/listings/3351_imagem2.jpg",
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
      image: "https://files.app.fcporto.pt/sources/5c90c108c4b3b1J17qAEFdZDq1XiD.jpg",
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
      tag: "Música"
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
      tag: "Música"
    }
    ],
    currentLocation: {},
    reviews: [{
      id: 1,
      nameUser: "Rokas Grabauskas",
      idLocation: 1,
      texto: "Beautiful place, I've always wanted to go there! So much history inside",
      rate: 4
    },
    {
      id: 2,
      nameUser: "John Doe",
      idLocation: 2,
      texto: "One of the biggest stadiums I've ever visited! A lot of great european nights in that picth!",
      rate: 5
    }
    ],
    itineraries: [
      {
        id: 1,
        title: "Stadium Tour",
        image:"https://creativeoriginsa.files.wordpress.com/2017/03/wembley-stadium-tour-for-06162816.jpg",
        locations: [{

          id: 1,
          name: "Estádio do Dragão",
          description: "The Estádio do Dragão is an all-seater football stadium located in Porto, Portugal. It is the current home stadium of FC Porto with a capacity of 50,033, making it the third largest football stadium in Portugal. Designed by Portuguese architect Manuel Salgado, the infrastructure was constructed to replace Porto's previous stadium, the Estádio das Antas, along with becoming one of the host venues for the UEFA Euro 2004 tournament finals. The inauguration took place on 16 November 2003 with a friendly match against Barcelona, setting an attendance record of 52,000 spectators.",
          city: "Porto",
          image: "",
          rating: 0,
          lat: 41.16177,
          long: -8.5857797,
          tag: "desporto"
        },
        {
          id: 2,
          name: "Estádio do Bessa",
          description: "A soccer stadium of portugal",
          city: "Porto",
          image: "",
          rating: 0,
          lat: 41.1624892,
          long: -8.6454498,
          tag: "desporto"
        },
        {
          id: 3,
          name: "Estádio do Rio Ave",
          description: "A soccer stadium of portugal located in Vila do Conde",
          city: "Vila do Conde",
          image: "",
          rating: 0,
          lat: 41.3627211,
          long: -8.7422818,
          tag: "desporto"
        }]
      },
      {
        id: 2,
        title: "Museum Tour",
        image:"https://cdn.shopify.com/s/files/1/0035/4502/products/170604_MOCA_GRAND_0301HR_GOOD_crop_1024x1024.jpg?v=1522360968",
        locations: [{
  
          id: 1,
          name: "Museu Futebol Clube do Porto",
          description: "The FC Porto Museum, officially known as FC Porto Museum by BMG (Portuguese: Museu do Futebol Clube do Porto by BMG) for sponsorship reasons, is a museum located in Porto, dedicated to the history of the Portuguese association football club FC Porto. It was inaugurated on 28 September 2013, on occasion of the club's 120th anniversary, and opened its doors to the general public on 26 October.",
          city: "Porto",
          image: "",
          rating: 0,
          lat: 41.160769,
          long: -8.5849047,
          tag: "museums"
        }]

      }
        
    
    ]
    
  },

  getters: {
    getIsLoggedIn: state => {
      return state.isLoggedIn
    },
    getUsers: state => {
      return state.users
    },

    getLastId(state) {
      let lastId = 0
      if (state.users.length > 0) {
        lastId = state.users[state.users.length - 1].id + 1
      }
      return lastId
    },

    getLocations: state => {
      return state.locations
    },

    getUserId: state => {
      return state.users.id
    },

    getCurrentLocation: state => {
      return state.currentLocation
    },

    getReviews: state => {
      return state.reviews
    },
    getItineraries: state => {
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
    },
    REGISTER(state, payload) {
      state.users.push(payload);
    },
    SET_USERS(state, payload) {
      state.users = payload;
    },
    CURRENT_LOCATION(state, payload) {
      state.currentLocation = payload;
    },
    SET_LOCATIONS(state, payload) {
      state.locations = payload;
    },
    ADD_REVIEWS(state, payload) {
      state.reviews.push(payload);
    },
    REMOVE: (state, index) => {

        for (let i = 0; i < state.users.length; i++) {
          if (state.users[i].id == index) {
            state.users.splice(i, 1)
          }
        }
    },

    SET_ITINERARIES(state, payload) {
      state.itineraries = payload;
    },
    /* Mutations that will prepare localStorage with empty arrays that will be
    populated with data on create */
    PREPARE_LOCAL_USERS(state) {
      state.users;
    },
    PREPARE_LOCAL_LOCATIONS(state) {
      state.locations;
    },
    PREPARE_LOCAL_REVIEWS(state) {
      state.reviews;
    },
   

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

    setLocations(context, data) {
      context.commit('SET_LOCATIONS', data)
    },

    setLocationVisitors(context, data) {
      context.commit('SET_LOCATION_VISITORS', data)
    },

    addReviews(context, data) {
      context.commit('ADD_REVIEWS', data)
    },

    currentLocation(context, data) {
      context.commit('CURRENT_LOCATION', data);
    },
    setIteneraries(context, data) {
      context.commit('SET_ITENERARIES', data)
    },

    prepareLocalUsers(context) {
      context.commit('PREPARE_LOCAL_USERS')
    },

    preapareLocalLocations(context) {
      context.commit('PREPARE_LOCAL_LOCATIONS')
    },

    prepareLocalReviews(context) {
      context.commit('PREPARE_LOCAL_REVIEWS')
    },
    remove: (context, index) => {
      context.commit('REMOVE', index);
    }
  },
  modules: {}
});