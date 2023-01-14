const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.EMAIL_API_KEY)
const dotenv = require('dotenv')
dotenv.config()

const bcrypt = require('bcryptjs')


const User = require('../models/user')

const msg = {
    to: 'medialics@gmail.com',
    from: 'sergeitheprogrammer@gmail.com',
    subject: 'Node email test',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<h1>Successfully sent!</h1>'
}

class Auth {
    getLogin(req, res, next) {
        const isLoggedIn = req.cookies.isLoggedIn
        console.log(req.session.isLoggedIn)
        // sgMail.send(msg).then(result => {
        //     console.log(result)
        // }).catch(err => console.log(err))

        return res.render('login', {
            pageTitle: 'Login',
            path: '/login',
            isAuth: isLoggedIn
        })
    }

    postLogin(req, res, next) {
        User.findOne({email: req.body.email}).then(user => {
            if (!user) {
                console.log("No user found!")
                return res.redirect('/login')
            }
            bcrypt.compare(req.body.password, user.password).then(result => {
                if (result) {
                    req.session.isLoggedIn = true
                    req.session.user = user

                    return req.session.save(err => {
                        console.log(err)
                        res.redirect('/')
                        console.log("Succesfully logged in")
                    })
                }

                console.log("Wrong password")
                res.redirect('/login')
            })


        })
      
    }

    getSignup(req, res, next) {
        const isLoggedIn = req.cookies.isLoggedIn
        return res.render('signup', {
            pageTitle: 'Sign up',
            path: '/signup',
            isAuth: isLoggedIn
        })
    }

    postSignup(req, res, next) {

        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
       
        User.findOne({ email: email }).then(userDoc => {
            if (userDoc) {
                return res.redirect('/signup')
            }

            return bcrypt.hash(password, 12).then(hashedPW => {
                const user = new User({
                    name: name,
                    email: email,
                    password: hashedPW
                })

                return user.save()
            }).then(result => {
                console.log("Successfully signed up")
                res.redirect('/login')

            })
        })

    }
}

module.exports = new Auth


/*
    transporter.sendMail({
        to: EMAIL,
        from: SHOPS_EMAIL,
        subject: 'Signup',
        html: MY_HTML
    })
*/