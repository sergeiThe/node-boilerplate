const Product = require('../models/product')

class Admin {
    getAdminPage(req, res, next) {
        res.render('admin', {
            pageTitle: 'Admin page',
            path: '/admin'
        })
    }

    postAddProduct(req, res, next) {
        const title = req.body.title
        const price = req.body.price
        const imgUrl = req.body.imgUrl
        const description = req.body.description

        const product = new Product({
            title: title,
            price: price,
            description: description,
            imgUrl: imgUrl
        })

        // Save product to db
        product.save().then(result => {
            console.log('Success!')
            return res.json(product)
        }).catch(err => {
            res.send(err)
        })
    }
    
}

module.exports = new Admin