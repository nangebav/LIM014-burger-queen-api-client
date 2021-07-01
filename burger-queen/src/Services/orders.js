const axios = require('axios');

const baseUrl = 'http://localhost:3001/orders';
const token = localStorage.token
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/orders'

export const getOrders = async (token) => {
    const resp = await axios({
        method: 'get',
        url: `${baseUrl}`        ,
        header: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
      })
        switch (resp.status) {
            case 200:
                //console.log(res.json());
                // console.log('good')
                return resp;
            case 400:
                return new Error('userId o productos son requeridos');
            case 401:
                return new Error('no hay cabecera de autentización');      
            default:
                break;
        }
      // pendiente header parameters
    return resp;
}

export const postOrders = async (token, newOrder) => {
    const resp = await axios({
        method: 'post',
        data: newOrder,
        url: baseUrl,
        header: {
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
        header: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }); 
    
    return resp;
}

// PENDIENTE PUT 
// PENDIENTE GET ORDER BY ID
