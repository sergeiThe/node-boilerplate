const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')


// Routes
const home = require('./routes/home')

// Consts
const PORT = process.env.PORT
const DB_URI = process.env.MONGO_URI

const app = express()

// Middlewares
app.set('view engine', 'ejs')

app.use('/', home)


mongoose.connect(DB_URI).then(res => {
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
}).catch(err => {
    console.log(err)
})