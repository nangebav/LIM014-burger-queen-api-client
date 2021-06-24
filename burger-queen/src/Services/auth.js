const axios = require('axios');

export const postRequest = async (formData) => {
    const resp = await axios.post('http://localhost:3001/auth', formData); 
    return resp;
}
