const axios = require('axios');

// const baseUrl = 'http://localhost:3001/orders';
const baseUrl = 'http://localhost:3001/orders'

export const getOrders = async (token) => {
    const resp = await axios({
        method: 'get',
        url: baseUrl,
        header: {
            Authorization: `Bearer ${token}`,
        }
      });
    
    return resp;
}

export const addOrders = async (token, newOrder) => {
    const resp = await axios({
        method: 'post',
        data: {
            newOrder
        },
        url: baseUrl,
        header: {
            Authorization: `Bearer ${token}`,
        }
    }); 
    
    return resp;
}

export const deleteOrders = async (token, orderId) => {
    const resp = await axios({
        method: 'delete',
        url: `${baseUrl}/${orderId}`,
        data: {
            orderId
        },
        header: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    })
    return resp;
}