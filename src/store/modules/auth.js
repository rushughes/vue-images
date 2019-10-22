import qs from 'qs';
import api from '../../api/imgur';

const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
