const axios = require('axios');

const baseUrl = 'http://localhost:3001/orders'

export const getOrders = async () => {
    const resp = await axios.get(baseUrl); 
    
    return resp;
}

export const addOrders = async (newOrder) => {
    const resp = await axios.post(baseUrl, newOrder ); 
    
    return resp;
}