import axios from 'axios';

axios.defaults.baseURL = location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://pfl-be.herokuapp.com';

export default axios;
