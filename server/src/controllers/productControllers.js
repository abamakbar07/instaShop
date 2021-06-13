const axios = require('axios')
const Product = require('../../models/productModel')

exports.getProducts = async (req, res) => {
      const instagramAPI = axios.create({
            baseURL: "https://graph.instagram.com",
      });
      try {
            const param = {
            params: {
                  fields: "id,media_type,caption,media_url,thumbnail_url",
                  access_token:
                  "IGQVJWYzBqX2M1YU9KTnpjZAm9nbDRMLVVJTVhHNnQ2TEkzeTdxUFJHa2ItODNTWlNnMW5tdUs4WUxJZAjl6N2YxYXFQSVVYbDlJVFNhXzFPYThkdTBLWG9tenNacjRpVk52SmVnbXJkRTgyT2MxQ3FfNQZDZD",
            },
            };
            const result = await instagramAPI.get('/me/media', param)
            const data = result.data.data

            res.json({
                  status: "Success",
                  message: "Product successfully loaded",
                  data,

            })            
            // dispatchProduct({
            //    type: "GET_PRODUCTS",
            //    payload: {
            //       data,
            //    }
            // })
            
      } catch (error) {
            console.log(error)
      }
   
//    Product.find()
//       .then(products => res.json(products))
//       .catch(err => console.log(err))
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