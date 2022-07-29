export default {
  // module로 사용
  namespaced: "true",
  // data
  state: () => ({
    movies: [],
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map((m) => m.imdbID);
    },
  },
  // methods
  // 변이 (데이터 수정 가능)
  mutations: {
    resetMovies(state) {
      state.movies = [];
    },
  },
  // 비동기
  actions: {
    searchMovies() {},
  },
};
