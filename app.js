const express = require('express')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')


// Route imports
const home = require('./routes/home')
const admin = require('./routes/admin')

// Consts
const PORT = process.env.PORT
const DB_URI = process.env.MONGO_URI

const app = express()

// Middlewares
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(fileUpload({})) // Form-data enable

// Routes
app.use('/', home)
app.use('/admin', admin)

mongoose.connect(DB_URI).then(res => {
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
}).catch(err => {
    console.log(err)
})