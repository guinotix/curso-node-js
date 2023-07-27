const http = require('node:http')

const port = 3000

const processRequest = (req, res) => {
    const { method, url } = req
    switch(method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    const dittoJSON = require('./ditto.json')
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')    
                    res.statusCode = 404
                    res.end('Error')
            }
    }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})