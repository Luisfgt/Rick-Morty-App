//controllers
const { login } = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handlerFavorites')
const { getCharById } = require('../controllers/getCharById')
//express
const express = require('express')
const router = express.Router()

//routes
router.get('/character/:id', getCharById)

router.get('/login', login)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav);

module.exports = {
    router
}