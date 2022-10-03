import { calendarAPI } from '../api/calendar'

export const calendarSlice = {
  state: {
    days: [],
    lessons: [],
    isCalendarLoading: false
  },
  getters: {
    days (state) {
      return state.days
    },
    isCalendarLoading (state) {
      return state.isCalendarLoading
    },
    lessonsByDay: (state) => (day) => {
      return state.lessons.filter(lesson => lesson.day === day)
    }
  },
  mutations: {
    setDays (state, payload) {
      state.days = payload
    },
    setCalendarLoading (state, payload) {
      state.isCalendarLoading = payload
    },
    setLessons (state, payload) {
      state.lessons = payload
    }
  },
  actions: {
    async getDays ({ commit }) {
      commit('setCalendarLoading', true)
      const data = await calendarAPI.get()
      commit('setDays', data)
      commit('setCalendarLoading', false)
    },
    async getLessons ({ commit }) {
      commit('setCalendarLoading', true)
      const data = await calendarAPI.getLessons()
      commit('setLessons', data)
      commit('setCalendarLoading', false)
    },
    async addLesson ({ commit }, postData) {
      commit('setCalendarLoading', true)
      const data = await calendarAPI.addLesson(postData)
      commit('setLessons', data)
      commit('setCalendarLoading', false)
    },
    async deleteLesson ({ commit }, deleteData) {
      commit('setCalendarLoading', true)
      const data = await calendarAPI.deleteLesson(deleteData)
      commit('setLessons', data)
      commit('setCalendarLoading', false)
    }
  },
  modules: {}
}