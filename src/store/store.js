import { createStore } from 'vuex'
import { pupilsSlice } from './modules/pupils'
import { calendarSlice } from './modules/calendar'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    pupilsSlice,
    calendarSlice
  }
})