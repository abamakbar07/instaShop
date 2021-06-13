const express = require('express')
const {
  getProducts,
  addProduct,
} = require("../controllers/productControllers");
const { coba } = require('../controllers/testControllers');
const { getUsers, register } = require('../controllers/userControllers');
const router = express.Router()

router.get('/coba', (req, res) => {
   res.send({
      status: "success"
   })
})

router.get('/mantap', coba)
router.get('/products', getProducts)
router.post('/product', addProduct)

router.get('/users', getUsers)
router.post('/user', register)

module.exports = router;