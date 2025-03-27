//! Ainda não está sendo utilizado
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erro na requisição');
    }
    return response.json();
};

export const fetchMenuItems = async () => {
    const response = await fetch(`${API_URL}/itens`);
    return handleResponse(response);
};

export const fetchItemsByCategory = async (category) => {
    const response = await fetch(`${API_URL}/itens/categoria/${category}`);
    return handleResponse(response);
};

export const createOrder = async (orderData) => {
    const response = await fetch(`${API_URL}/pedidos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    });
    return handleResponse(response);
};
