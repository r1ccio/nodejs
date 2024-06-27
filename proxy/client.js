const axios = require('axios');
const config = require('./config');

const apiUrl = config.get('apiUrl');

const client = axios.create({
    baseURL: apiUrl
});

module.exports = client;
