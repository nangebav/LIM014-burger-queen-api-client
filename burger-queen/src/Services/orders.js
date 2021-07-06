const axios = require('axios');

const baseUrl = 'http://localhost:8888/orders';
const token = localStorage.token
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/orders'

export const getOrders = async (token) => {
    try {
        const resp = await axios({
            method: 'get',
            url: `${baseUrl}?page=1&limit=50`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }) 

          if (resp.status !== 200) {
            return new Error('Error');
          } 
          return resp;

    } catch (error) {
        return error
    }
 
}

export const postOrders = async (token, newOrder) => {
    const resp = await axios({
        method: 'post',
        data: newOrder,
        url: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
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
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }); 
    
    return resp;
}

export const putOrders = async (changeOrder, OrderId) => {
    const resp = await axios({
        method: 'put',
        url: `${baseUrl}/${OrderId}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data:JSON.stringify(changeOrder),
      });
    return resp;
}

// PENDIENTE PUT 
// PENDIENTE GET ORDER BY ID
// PENDIENTE GET ORDER BY ID
