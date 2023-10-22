const Product = require('../models/product');
const Search = require('../models/search');
exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      // console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
        result : req.session.result
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};


exports.postSearch = (req,res,next)=>{
  const search = req.body.search;
  Product.find({title:search})
  .then(search=>{
    console.log(search,'aaaaaaaaaaaaaaaaa');
    newsearch = new Search({
      category:search[0].category,
      title:search[0].title,
      price:search[0].price,
      description:search[0].description,
      details:search[0].details,
      imageUrlFront:search[0].imageUrlFront,
      imageUrlBack:search[0].imageUrlBack
    })
    .save()
    .then((result)=>{
      console.log("data saved to search db");
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  .catch(err=>{
    console.log(err);
  })
  res.redirect('/search')
  Search.deleteMany({})
  .then(result=>{
    console.log('search contenet deleted successfully');
  })
  .catch(err=>{
    console.log(err);
  })
}


exports.getSearch = (req,res,next)=>{
    Search.find()
    .then(search=>{
      res.render('shop/search', {
        sear: search,
        pageTitle: 'All Products',
        path: '/products',
      });
    })
    .catch(err => {
      console.log(err);
    });
}