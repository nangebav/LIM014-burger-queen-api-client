const axios = require('axios');

const baseUrl = 'http://localhost:3001/orders'

export const getOrders = async () => {
    const resp = await axios.get(baseUrl); 
    
    return resp;
}