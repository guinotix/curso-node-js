const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const moviesRouter = require('./routes/movies')

const app = express()

app.disable('x-powered-by')
// app.use(express.json())
app.use(bodyParser.json())

// CORS Middleware
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:8080'
        ]
        if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }
        if (!origin) {
            return callback(null, true)
        }
        return callback(new Error('Not allowed by CORS'))
    }
}))

// API Peliculas
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})