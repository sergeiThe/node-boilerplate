class Shop {
    getHomePage(req, res, next) {
        res.render('index', {
            pageTitle: 'Home page',
            path: '/', 
            // products: products
        })
    }
}

module.exports = new Shop