import router from "@/router";

const state = () => ({
  getCurrencies: {
    loading: false,
    success: null,
    error: null,
  },
  convert: {
    loading: false,
    success: null,
    error: null,
  },
  compare: {
    loading: false,
    success: null,
    error: null,
  },
});

const getters = {
  loading: (state) => {
    return state.loading;
  },
};

const actions = {
  getCurrencies({ commit }) {
    commit("loadingGetCurrencies", true);
    const token = localStorage.getItem("token");
    fetch("https://currency-377023.uc.r.appspot.com/v1/currencies", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        if (res.status === 403) {
          localStorage.removeItem("token");
          router.push("/login");
        }
        return res.json();
      })
      .then((response) => {
        let { data } = response;
        data = Object.keys(data).map((key) => ({ title: key, value: key }));
        commit("successGetCurrencies", data);
        commit("loadingGetCurrencies", false);
      })
      .catch((response) => {
        commit("errorGetCurrencies", response);
        alert("No se pudo obtener las monedas, vuelve a ingresar tu correo");
        commit("loadingGetCurrencies", false);
      });
  },
  convert({ commit }, payload) {
    commit("loadingConvert", true);
    const token = localStorage.getItem("token");
    fetch(
      `https://currency-377023.uc.r.appspot.com/v1/currencies/conversion?amount=${payload.amount}&source=${payload.source}&destination=${payload.destination}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    )
      .then((res) => {
        if (res.status === 403) {
          localStorage.removeItem("token");
          router.push("/login");
        }
        return res.json();
      })
      .then((response) => {
        commit("successConvert", response.data);
        commit("loadingConvert", false);
      })
      .catch((response) => {
        commit("errorConvert", response.data);
        alert("No se pudo obtener las monedas");
        commit("loadingConvert", false);
      });
  },
  compare({ commit }, payload) {
    commit("loadingComparison", true);
    const token = localStorage.getItem("token");

    fetch(
      `https://currency-377023.uc.r.appspot.com/v1/currencies/comparison?amount=${
        payload.amount
      }&currencies=${JSON.stringify(payload.currencies)}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    )
      .then((res) => {
        if (res.status === 403) {
          localStorage.removeItem("token");
          router.push("/login");
        }
        return res.json();
      })
      .then((response) => {
        commit("successComparison", response.data);
        commit("loadingComparison", false);
      })
      .catch((response) => {
        commit("errorComparison", response.data);
        alert("No se pudo obtener las monedas");
        commit("loadingComparison", false);
      });
  },
};

const mutations = {
  loadingGetCurrencies(state, payload) {
    state.getCurrencies.loading = payload;
  },
  loadingConvert(state, payload) {
    state.convert.loading = payload;
  },
  loadingComparison(state, payload) {
    state.compare.loading = payload;
  },
  successGetCurrencies(state, payload) {
    state.getCurrencies.success = payload;
  },
  successConvert(state, payload) {
    state.convert.success = payload;
  },
  successComparison(state, payload) {
    state.compare.success = payload;
  },
  errorGetCurrencies(state, payload) {
    state.getCurrencies.error = payload;
  },
  errorConvert(state, payload) {
    state.convert.error = payload;
  },
  errorComparison(state, payload) {
    state.compare.error = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
