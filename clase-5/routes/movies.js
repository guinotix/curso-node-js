const express = require('express')
const moviesRouter = express.Router()

const { MovieController } = require('../controllers/movies.js')


moviesRouter.get('/', MovieController.getAll)
moviesRouter.get('/:id', MovieController.getById)
moviesRouter.post('/', MovieController.create)
moviesRouter.patch('/:id', MovieController.update)
moviesRouter.delete('/:id', MovieController.delete)

module.exports = moviesRouter