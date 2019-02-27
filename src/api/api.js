import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 4971177da7344138d3527b4a5222fab3900d1115f6cc7dfe06b3a2bf5e440fe9'
      }
});