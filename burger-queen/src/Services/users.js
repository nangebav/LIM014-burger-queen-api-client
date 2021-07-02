const axios = require('axios');

const baseUrl = 'http://nodejs-bq-api.herokuapp.com/users'
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/users'
// const baseUrl = 'http://localhost:3001/users'
const token = localStorage.token;

export const getUsers = async () => { 
    const resp = await axios(
        { 
        method: 'get',
        url: baseUrl,
        headers: {
            Authorization: `Bearer ${token}?page=1&&limit=50`, 
            'Content-Type': 'application/json',
         } 
        }); // Falta header parameters
        return resp; 
    } 

    export const getUser = async (token, userId) => { 
        const resp = await axios({ 
            method: 'get', 
            url: `${baseUrl}/${userId}`, 
            header: { Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json',
         },
        }); 
    return resp; 
} 

export const postUser = async (token, newUser) => {
     const resp = await axios({ 
        method: 'post',
        url: baseUrl, 
        header: { 
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json', 
        },
        data: JSON.stringify(newUser), 
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