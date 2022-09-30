export const pupilsAPI = {
  async get () {
    const response = await fetch(import.meta.env.VITE_API_URL + 'pupils').then(resp => resp.json())
    return response.rows
  },
  async update (data) {
    const response = await fetch(import.meta.env.VITE_API_URL + 'pupils', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(resp => resp.json())
    return response.rows
  },
  async post (data) {
    const response = await fetch(import.meta.env.VITE_API_URL + 'pupils', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(resp => resp.json())
    return response.rows
  },
  async delete (id) {
    const response = await fetch(import.meta.env.VITE_API_URL + 'pupils', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) }).then(resp => resp.json())
    return response.rows
  }
}