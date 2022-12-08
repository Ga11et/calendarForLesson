import { logsAPI } from '../api/logs'

export const logsSlice = {
  state: {
    logs: [],
    isLogsLoaded: false
  },
  getters: {
    logs (state) {
      return state.logs
    },
    isLogsLoaded (state) {
      return state.isLogsLoaded
    }
  },
  mutations: {
    setLogs (state, payload) {
      state.logs = payload.reverse()
    },
    setLogsLoaded (state, payload) {
      state.isLogsLoaded = payload
    }
  },
  actions: {
    async getLogs ({ commit }) {
      commit('setLogsLoaded', true)
      const data = await logsAPI.get()
      commit('setLogs', data)
      commit('setLogsLoaded', false)
    },
    async getSecondLogs ({ commit }) {
      const data = await logsAPI.get()
      commit('setLogs', data)
    },
    async deleteLogs ({ commit }) {
      const data = await logsAPI.delete()
      commit('setLogs', data)
    }
  },
  modules: {}
}