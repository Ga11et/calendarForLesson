import { pupilsAPI } from '../api/pupils'

export const pupilsSlice = {
  state: {
    pupils: [],
    isPupilsLoading: false
  },
  getters: {
    pupils (state) {
      return state.pupils
    },
    isPupilsLoading (state) {
      return state.isPupilsLoading
    }
  },
  mutations: {
    setPupils (state, payload) {
      state.pupils = payload
    },
    setLoading (state, payload) {
      state.isPupilsLoading = payload
    }
  },
  actions: {
    async fetchPupils ({ commit }) {
      commit('setLoading', true)
      const pupils = await pupilsAPI.get()
      commit('setPupils', pupils) 
      commit('setLoading', false)
    },
    async updatePupil ({ commit, dispatch }, data) {
      commit('setLoading', true)
      const pupils = await pupilsAPI.update(data)
      commit('setPupils', pupils) 
      commit('setLoading', false)
      dispatch('getSecondLogs')
    },
    async postPupil ({ commit }, data) {
      commit('setLoading', true)
      const pupils = await pupilsAPI.post(data)
      commit('setPupils', pupils)
      commit('setLoading', false)
    },
    async deletePupil ({ commit }, data) {
      commit('setLoading', true)
      const pupils = await pupilsAPI.delete(data)
      commit('setPupils', pupils)
      commit('setLoading', false)
    }
  },
  modules: {}
}