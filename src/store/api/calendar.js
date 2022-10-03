export const calendarAPI = {
  async get () {
    const response = await fetch(import.meta.env.VITE_API_URL + 'calendar').then(resp => resp.json())
    return response.rows
  },
  async getLessons () {
    const response = await fetch(import.meta.env.VITE_API_URL + 'lessons').then(resp => resp.json())
    return response.rows
  },
  async addLesson (data) {
    const response = await fetch(import.meta.env.VITE_API_URL + 'lessons', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(resp => resp.json())
    return response.rows
  },
  async deleteLesson (data) {
    const response = await fetch(import.meta.env.VITE_API_URL + 'lessons', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(resp => resp.json())
    return response.rows
  },
} 