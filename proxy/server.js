const express = require('express');
const config = require('./config');
const router = require('./router');

const app = express();

app.use('/', router);

const PORT = config.get('port');
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
