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
        url: baseUrl,
        header: {
            Authorization: `Bearer ${token}`,
        }
    },newOrder); 
    
    return resp;
}

// export const addOrders = async (newOrder) => {
//    const resp = await axios({
//        method: 'get',
//        url: baseUrl,
//        header: {
//            Authorization: `Bearer ${token}`,
//        }
//      });
//    return resp;
// }