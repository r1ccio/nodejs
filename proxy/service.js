const client = require('./client');

module.exports = {
    getHelloWorld: () => {
        return client.get('/');
    }
};
