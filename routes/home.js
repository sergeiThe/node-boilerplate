const express = require('express')
const router = express.Router()

// Controllers
const shopC = require('../controllers/shop')


// Routes
router.get('/', shopC.getHomePage)



module.exports = router;