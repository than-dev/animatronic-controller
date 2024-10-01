const { createServer } = require('node:http');
const { routeMapper } = require('./url-mapper');

const server = createServer((req, res) => {
    const url = req.url;
    routeMapper[url](req, res);
}) 

server.listen(3030);


