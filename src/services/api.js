//! Ainda não está sendo utilizado
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const fetchItemsByCategory = async (category) => {
    try {
        const response = await fetch(`${API_URL}/menu/itens/categoria/${category}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar itens');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};

export const createClient = async (clientData) => {
    try {
        const response = await fetch(`${API_URL}/clientes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientData),
        });
        if (!response.ok) {
            throw new Error('Erro ao criar cliente');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_URL}/pedidos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
        if (!response.ok) {
            throw new Error('Erro ao criar pedido');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};