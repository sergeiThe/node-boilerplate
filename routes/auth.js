const express = require('express')
const router = express.Router()

// Controllers
const authC = require('../controllers/auth')


// Routes
router.get('/login', authC.getLogin)
router.post('/login', authC.postLogin)



module.exports = router;