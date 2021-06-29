const axios = require('axios');
// const baseUrl = 'https://burguer-api.herokuapp.com/auth'
const baseUrl = 'http://localhost:3001/auth'
export const postRequest = async (formData) => {
    const resp = await axios.post(baseUrl, formData); 
    return resp;
}
