const axios = require('axios');

// const baseUrl = 'http://localhost:3001/users'
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/users'
// const baseUrl = 'http://localhost:3001/users'
const baseUrl = 'http://localhost:8888/users'

const token = localStorage.token
//console.log(token)
export const getUsers = async () => {
    const resp = await axios({
        method: 'get',
        url: `${baseUrl}?page=1&limit=50`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });   
    return resp;
}

export const getUser = async (token, userId) => {
    const resp = await axios({
        method: 'get',
        url: `${baseUrl}/${userId}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
         },
        }); 
    return resp; 
} 

export const postUser = async (newUser) => {
     const resp = await axios({ 
        method: 'post',
        url: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(newUser), 
        });
        return resp; 
    } 

export const deleteUsers = async (userId) => {
    const resp = await axios({
        method: 'delete',
        url: `${baseUrl}/${userId}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    })
    return resp;
}

export const putUsers = async (objectEdit, userId) => {
    const resp = await axios({
        method: 'put',
        url: `${baseUrl}/${userId}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data:JSON.stringify(objectEdit),
      });
    return resp;
}