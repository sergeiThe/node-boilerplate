class Shop {
    getHomePage(req, res, next) {
        const isLoggedIn = req.cookies.isLoggedIn
        res.render('index', {
            pageTitle: 'Home page',
            path: '/', 
            isAuth: isLoggedIn
        })
    }
}

module.exports = new Shop