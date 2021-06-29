const axios = require('axios');

// const baseUrl = 'http://localhost:3001/users'
// const baseUrl = 'https://burguer-api.herokuapp.com/users'
const baseUrl = 'http://localhost:3001/users'

export const getUsers = async (token) => {
    const resp = await axios({
        method: 'get',
        url: baseUrl,
        header: {
            Authorization: `Bearer ${token}`,
        }
      });
    return resp;
}


export const deleteUsers = async (token, userId) => {
    const resp = await axios({
        method: 'delete',
        url: `${baseUrl}/${userId}`,
        data: {
            userId
        },
        header: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    })
    return resp;
}