const axios = require('axios');

const baseUrl = 'http://localhost:3001/users'

export const getUsers = async () => {
    const resp = await axios.get(baseUrl); 
    return resp;
}