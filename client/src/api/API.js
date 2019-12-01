import axios from 'axios'

let BASE_URL = 'http://localhost:3001';

export default () => {
   return axios.create({
      baseURL: BASE_URL,
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   });
}