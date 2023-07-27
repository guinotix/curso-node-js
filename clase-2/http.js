const http = require('node:http')

const port = 3000

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    if (req.url === '/') {
        res.statusCode = 200
        res.end('Hola mundo')
    } else {
        res.statusCode = 404
        res.end('Error')
    }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})