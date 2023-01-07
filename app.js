const express = require('express')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)


// Route imports
const home = require('./routes/home')
const admin = require('./routes/admin')
const auth = require('./routes/auth')

// Consts
const PORT = process.env.PORT
const SESSION_SECRET = process.env.SESSION_SECRET
const DB_URI = process.env.MONGO_URI

const app = express()
const store = new MongoDBSession({
    uri: DB_URI,
    collection: 'sessions'
})

// Middlewares
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false})) // HTML form
app.use(fileUpload({})) // Form-data enable
app.use(cookieParser())
app.use(session({secret: SESSION_SECRET, resave: false, saveUninitialized: false, store: store}))

// Routes
app.use('/admin', admin)
app.use('/', home)
app.use('/', auth)

// Connect
mongoose.connect(DB_URI).then(res => {
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
}).catch(err => {
    console.log(err)
})