import api from '../../api/skhole';

const state = {
  courses: []
};

const getters = {
  allCourses: state => state.courses
};

const actions = {
  async fetchCourses({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchCourses(token);
    commit('setCourses', response.data);
  }
};

const mutations = {
  setCourses: (state, courses) => {
    state.courses = courses;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
