const express = require('express')
const dittoJSON = require('./ditto.json')

const app = express()

// Ocultar info en las peticiones: solo por seguridad
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234


// Middleware
app.use((req, res, next) => {
    console.log('el middleware')
    
    // Importante, hay que decirle que continue
    next()
})

// Solo admite peticiones json
//app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).send('Hola mundo')
})

app.get('/pokemon/ditto', (req, res) => {
    res.json(dittoJSON)
})

// API: pokeapi.co
app.post('/pokemon', (req, res) => {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', () => {
        const data = JSON.parse(body)
        res.status(201).json(data)
    })
})

// la ultima petición sin controlar llega aquí
app.use((req, res) => {
    res.status(400).send('Error')
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})