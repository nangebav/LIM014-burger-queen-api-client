const axios = require('axios');

export const getProducts = async () => {
    const resp = await axios.get('http://localhost:3001/products'); 

    return resp;
}
