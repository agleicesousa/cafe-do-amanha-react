const API_URL = process.env.REACT_APP_API_URL;

const handleResponse = async (response) => {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Erro na requisição');
    }
    return response.json();
  };
// listar todos os itens do menu
export const listarTodosItens = async () => {
  const response = await fetch(`${API_URL}/menu`);
  return handleResponse(response); 
};
// listar por id
export const buscarItemPorId = async (id) => {
    const response = await fetch(`${API_URL}/menu/${id}`); 
    return handleResponse(response); 
};
  // listar por categoria
export const buscarItensPorCategoria = async (categoria) => {
    const response = await fetch(`${API_URL}/menu?categoria=${categoria}`); 
    return handleResponse(response);
};
  