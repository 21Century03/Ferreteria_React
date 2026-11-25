import axios from 'axios';

export const guardarToken = (t) => localStorage.setItem('token', t);
export const leerToken = () => localStorage.getItem('token');
export const borrarToken = () => localStorage.removeItem('token');

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL, timeout: 10000 });

api.interceptors.request.use((config) => {
  const token = leerToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (error) => {
    if (error.response?.status === 401 && leerToken()) {
      borrarToken();
      window.dispatchEvent(new Event('sesion-expirada'));
    }
    return Promise.reject(error);
  }
);

export function mensajeDeError(error) {
  if (error.response) {
    const d = error.response.data;
    if (Array.isArray(d?.detalles) && d.detalles.length) return d.detalles.map((x) => x.mensaje).join('. ');
    return d?.error || 'Error en el servidor';
  }
  if (error.request) return 'No se pudo conectar con el servidor';
  return error.message;
}

export default api;