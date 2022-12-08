import { createStore } from 'vuex'
import { pupilsSlice } from './modules/pupils'
import { calendarSlice } from './modules/calendar'
import { logsSlice } from './modules/logs'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    pupilsSlice,
    calendarSlice,
    logsSlice
  }
})