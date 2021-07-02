const axios = require('axios');

const token = localStorage.token
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/products'
// const baseUrl = 'https://burguer-api.herokuapp.com/products'
const baseUrl = 'http://nodejs-bq-api.herokuapp.com/products'

export const getProducts = async (token) => {
    const resp = await axios({
        method: 'get',
        url: `${baseUrl}?page=1&limit=50`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
      }); // Falta header parameters
    return resp;
}

export const getProductId = async (productId, token) => {
    const server = `${baseUrl}/${productId}`;
    const resp = await axios({
        method: 'get',
        url: server,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
      });
    return resp;
}

export const putProducts = async (changeProduct, productId) => {
    const resp = await axios({
        method: 'put',
        url: `${baseUrl}/${productId}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data:changeProduct,
      });
    return resp;
}

export const postProducts = async (token, product) => {
    const resp = await axios({
        method: 'post',
        url: baseUrl,
        data: JSON.stringify(product),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return resp;
}

export const deleteProduct = async (token, productId) => {
    const resp = await axios({
        method: 'delete',
        url: `${baseUrl}/${productId}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });    
    return resp;
}
export const deleteUsers = async (token, userId) => {
    const resp = await axios({
        method: 'delete',
        url: `${baseUrl}/${userId}`,
        data: userId,
        header: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    })
    return resp;
}