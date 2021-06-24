const axios = require('axios');

const baseUrl = 'http://localhost:3001/products'

export const getProducts = async () => {
    const resp = await axios.get(baseUrl); 
    return resp;
}

export const getProductId = async (productId) => {
    const server = `${baseUrl}/${productId}`;
    const resp = await axios.get(server); 
    return resp;
}

export const putProducts = async () => {
    const resp = await axios.put(baseUrl); 
    return resp;
}

export const postProducts = async () => {
    const resp = await axios.post(baseUrl); 
    return resp;
}




