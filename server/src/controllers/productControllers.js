const Product = require('../../models/productModel')

exports.getProducts = async (req, res) => {
   Product.find()
      .then(products => res.json(products))
      .catch(err => console.log(err))
}

exports.addProduct = async (req, res) => {
   const { id, name, price, size, variant } = req.body;
   const newProduct = new Product({
      id: id, 
      name: name,
      price: price,
      size: size,
      variant: variant,
   })
   newProduct.save()
      .then(() => res.json({
            message: "Created product successfully"
      }))
      .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
      }))
}  