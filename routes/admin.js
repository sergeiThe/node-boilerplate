const express = require('express')
const router = express.Router()

// Controllers
const adminC = require('../controllers/admin')


// Routes
router.get('/', adminC.getAdminPage)
router.post('/', adminC.postAddProduct)



module.exports = router;