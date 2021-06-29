const axios = require('axios');

// const baseUrl = 'http://localhost:3001/users'
// const baseUrl = 'https://appi-burger-queen-client.herokuapp.com/users'
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