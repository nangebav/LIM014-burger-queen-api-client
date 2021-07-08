const axios = require('axios');

const token = localStorage.token
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/products'
// const baseUrl = 'https://burguer-api.herokuapp.com/products'
const baseUrl = 'http://localhost:8888/products'

export const getProducts = async (token,page,qty) => {
    try {
    const resp = await axios({
        method: 'get',
        url: `${baseUrl}?page=${page}&limit=${qty}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
      });

      if (resp.status !== 200) {
        return new Error('Error');
      } 
      return resp;

    } catch (error){
        return error
    }
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
    try {
        const resp = await axios({
            method: 'put',
            url: `${baseUrl}/${productId}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            data:JSON.stringify(changeProduct),
          });
          if (resp.status !== 200) {
            return new Error('Error');
          } 
          return resp;
    
        } catch (error){
            return error
        }
}

export const postProducts = async (product) => {
    try {
    const resp = await axios({
        method: 'post',
        url: baseUrl,
        data: JSON.stringify(product),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    if (resp.status !== 200) {
        return new Error('Error');
      } 
      return resp;
    }   catch (error) {
            return error
    }

}

export const deleteProduct = async (productId) => {
    try {
    const resp = await axios({
        method: 'delete',
        url: `${baseUrl}/${productId}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });    
    if (resp.status !== 200) {
        return new Error('Error');
      } 
      return resp;
    }
    catch (error) {
        return error
    }
}