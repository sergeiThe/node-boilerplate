class Auth {
    getLogin(req, res, next) {
        const isLoggedIn = req.cookies.isLoggedIn
        console.log(req.session.isLoggedIn)
        res.render('login', {
            pageTitle: 'Login',
            path: '/login', 
            isAuth: isLoggedIn
        })
    }

    postLogin(req, res, next) {
        res.setHeader('Set-Cookie', 'isLoggedIn=true')
        req.session.isLoggedIn = true;
        res.redirect('/login')
    }
}

module.exports = new Auth