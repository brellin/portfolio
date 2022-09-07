import axios from 'axios';

axios.defaults.baseURL = location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://server.willumstead.com/';

export default axios;
