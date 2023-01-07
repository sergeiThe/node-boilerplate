class Auth {
    getLogin(req, res, next) {
        const isLoggedIn = req.cookies.isLoggedIn
        res.render('login', {
            pageTitle: 'Login',
            path: '/login', 
            isAuth: isLoggedIn
        })
    }

    postLogin(req, res, next) {
        res.setHeader('Set-Cookie', 'isLoggedIn=true')
        res.redirect('/')
    }
}

module.exports = new Auth