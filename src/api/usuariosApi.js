import api from './axiosClient';

export async function listarUsuarios() {
  const { data } = await api.get('/api/usuarios');
  return data;
}

export async function editarUsuario(email, cambios) {
  const { data } = await api.put(`/api/usuarios/${encodeURIComponent(email)}`, cambios);
  return data;
}

export async function eliminarUsuario(email) {
  await api.delete(`/api/usuarios/${encodeURIComponent(email)}`);
}