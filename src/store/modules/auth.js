import api from '../../api/skhole';

const state = {
  token: window.localStorage.getItem('skhole_token'),
  name: window.localStorage.getItem('skhole_name')
};

const getters = {
  isLoggedIn: state => !!state.token,
  getToken: state => state.token,
  getName: state => state.name
};

const actions = {
  async login({ commit }, { username, password }) {
    const responseLogin = await api.login(username, password);
    const token = responseLogin.data.token;
    const responseName = await api.getAuth(token);
    const name = responseName.data.firstName;
    const userObj = { token, name };
    commit('setUser', userObj);
    window.localStorage.setItem('skhole_token', token);
    window.localStorage.setItem('skhole_name', name);
  },
  logout: ({ commit }) => {
    const userObj = { token: null, name: null };
    commit('setUser', userObj);
    window.localStorage.removeItem('skhole_token');
    window.localStorage.removeItem('skhole_name');
  }
};

const mutations = {
  setUser: (state, { token, name }) => {
    state.token = token;
    state.name = name;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
