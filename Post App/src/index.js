import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

let requestInterceptor = axios.interceptors.request.use((request) => {
    console.log('request: ', request);
    // Edit request config
    return request;
}, (error) => {
    console.log('error: ', error);
    return Promise.reject(error);
});

axios.interceptors.request.eject(requestInterceptor);

let responseInterceptor = axios.interceptors.response.use((response) => {
    console.log('response: ', response);
    // Edit request config
    return response;
}, (error) => {
    console.log('error: ', error);
    return Promise.reject(error);
});
axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
