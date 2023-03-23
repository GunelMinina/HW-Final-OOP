const http = require('node:http');
const {Calculation} = require("./calculation");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var expression = url_parts.query.expression;

    if (expression) {
        const calc = new Calculation(expression);
        res.end(calc.toString());
        return;
    } else {
        res.end('Не задано выражение');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
