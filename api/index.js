const { createServer } = require('node:http');
const { routeMapper } = require('./src/url-mapper');
const { setupIOTComponents } = require('./src/arduino');
const { getUrlParams, getRawUrl } = require('./src/url');


const setCorsHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todas as origens
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Cabeçalhos permitidos
};

const server = createServer((req, res) => {
    setCorsHeaders(res);

    const url = req.url;
    console.log(url);

    if(req.method === 'POST') {
        routeMapper[getRawUrl(url)]({ ...req, params: getUrlParams(url) }, res);
    } else {
        res.writeHead(204).end();
    }
});



server.listen(3030, () => {
    console.log('server initialized at port 3030')
});

setupIOTComponents();


