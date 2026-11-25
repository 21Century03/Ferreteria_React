import api from './axiosClient';

export async function login(email, password) {
  const { data } = await api.post('/api/auth/login', { email, password });
  return data; // { accessToken, tokenType, expiresIn }
}

export async function registrar(datos) {
  const cuerpo = { ...datos };
  if (!cuerpo.telefono) delete cuerpo.telefono; // el backend rechaza ''
  const { data } = await api.post('/api/auth/register', cuerpo);
  return data;
}

export async function obtenerPerfil() {
  const { data } = await api.get('/api/auth/me');
  return data; // { correo, nombre, telefono, rol, activo }
}