const express = require('express')
const router = express.Router()


// Controllers
const authC = require('../controllers/auth')


// Routes
router.get('/login', authC.getLogin)
router.post('/login', authC.postLogin)

router.get('/signup', authC.getSignup)
router.post('/signup', authC.postSignup)



module.exports = router;