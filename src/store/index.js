import { createStore } from "vuex";
import login from "./modules/login";
import currency from "./modules/currency";

const store = createStore({
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    currency,
  },
});

export default store;
