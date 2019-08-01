import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-a66e0.firebaseio.com/'
});

export default instance;