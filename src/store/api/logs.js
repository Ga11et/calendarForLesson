export const logsAPI = {
  async get () {
    const response = await fetch(import.meta.env.VITE_API_URL + 'logs').then(resp => resp.json())
    return response.rows
  },
  async delete () {
    const response = await fetch(import.meta.env.VITE_API_URL + 'logs', {
      method: "DELETE"
    }).then(resp => resp.json())
    return response.rows
  }
} 