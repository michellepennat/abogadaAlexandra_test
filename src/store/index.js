import { createStore } from "vuex";
import login from "./modules/login";

const store = createStore({
  state() {
    return {
      a: "asdadasd",
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});

export default store;
