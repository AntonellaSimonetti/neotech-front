/*hacemos llamada al back*/ 
const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  get: async (path) => {
    const res = await fetch(`${API_URL}${path}`);
    return res.json();
  },

  post: async (path, body) => {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    return res.json();
  }
};
