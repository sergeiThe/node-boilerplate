class Shop {
    getHomePage(req, res, next) {
        res.render('index')
    }
}

module.exports = new Shop