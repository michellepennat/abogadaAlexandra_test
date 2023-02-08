import router from "../../router";

const state = () => ({
  loading: false,
  success: false,
  error: false,
});

const getters = {
  loading: (state) => {
    return state.loading;
  },
};

const actions = {
  login({ commit }, payload) {
    commit("loading", true);
    fetch("https://currency-377023.uc.r.appspot.com/v1/auth", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.accessToken) {
          localStorage.setItem("token", response.accessToken);
          commit("success", response);
          router.push("/");
        } else {
          commit("error", true);
          alert("Correo incorrecto");
        }
        commit("loading", false);
      })
      .catch((response) => {
        commit("error", response);
        alert("Correo incorrecto");
        commit("loading", false);
      });
  },
};

const mutations = {
  loading(state, payload) {
    state.loading = payload;
  },
  success(state, payload) {
    state.success = payload;
    state.error = false;
  },
  error(state, payload) {
    state.error = payload;
    state.success = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
