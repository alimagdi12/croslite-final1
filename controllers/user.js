const Product = require('../models/product');

exports.getHome =(req,res,next)=>{
    Product.find()
    .then(products => {
      console.log(products);
      res.render('user/index', {
        prods: products,
        pageTitle: 'All Products',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
}

exports.getAbout =(req,res,next)=>{
    res.render('./user/about',{   
        isAuthenticated: req.session.isLoggedIn
    })
}



exports.getContact =(req,res,next)=>{
    res.render('./user/contact',{
        isAuthenticated: req.session.isLoggedIn

    })
}



