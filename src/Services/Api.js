import axios from "axios";


const api = axios.create( { baseURL: 'https://private-2b2ab9-linechart.apiary-mock.com' } );

export default api;